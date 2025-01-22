import * as React from "react";
import { cn } from "@/lib/utils";
import { Circle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Warning from "@/assets/warning.svg";
import Image from "next/image";

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface TimelineItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isChild: boolean;
  isCurrent: boolean;
  icon?: React.ReactNode;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, children, isChild, icon, isCurrent, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative pl-8", className)} {...props}>
        <div
          className={cn(
            "absolute left-0  top-1 h-4 w-4 rounded-full  bg-background flex items-center justify-center",
            isCurrent && "top-1/2 -translate-y-1/2"
          )}>
          {icon}
        </div>
        {!isChild && !isCurrent && (
          <div className="border-l border-primary absolute left-2 top-6 bottom-0" />
        )}
        {children}
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };

export interface TimelineEvent {
  title: string;
  status: "completed" | "in-progress" | "pending";
  query: string;
  disabled: boolean;
  children?: TimelineEvent[];
}

const statusIcons = {
  completed: <CheckCircle2 className="h-4 w-4 text-green-500" />,
  "in-progress": (
    <>
      <Circle className="h-4 w-4 text-primary absolute top-0 right-0 animate-ping" />
      <Circle className="h-4 w-4 text-primary bg-primary rounded-full  absolute top-0 right-0 " />
    </>
  ),
  pending : <Image src={Warning.src} alt="Warning" width={16} height={16} className="aspect-square" />
};

// const statusColors = {
//   completed: "bg-green-500",
//   "in-progress": "bg-blue-500",
//   pending: "bg-yellow-400",
// };

function renderTimelineItem(
  event: TimelineEvent,
  key: number,
  isChild: boolean,
  current?: string
) {
  const isCurrent = current === event.query;
  return (
    <TimelineItem
      key={key}
      icon={isCurrent ? statusIcons["in-progress"] : statusIcons[event.status]}
      isChild={isChild}
      isCurrent={isCurrent}>
      <div className={cn("flex items-center justify-between" , )}>
        {event.disabled ? (
          <span className="cursor-not-allowed">{event.title}</span>
        ) : (
          <Link
            href={{
              query: `form=${event.query}`,
            }}
            className={`${
              isCurrent &&
              "bg-gradient-to-r from-white to-primary/50 w-full rounded-sm py-2"
            } ${isChild && "text-sm"}`}>
            {event.title}
          </Link>
        )}
        {/* <Badge className={cn(statusColors[event.status] , "uppercase")}>{event.status}</Badge> */}
      </div>
      {event.children && (
        <Timeline className="mt-4">
          {event.children.map((value, key) =>
            renderTimelineItem(
              value,
              key,
              value.children ? false : true,
              current
            )
          )}
        </Timeline>
      )}
    </TimelineItem>
  );
}

export function TimeLine({
  events,
  current,
}: {
  events: TimelineEvent[];
  current?: string;
}) {
  return (
    <Timeline>
      {events.map((value, key) =>
        renderTimelineItem(value, key, false, current)
      )}
    </Timeline>
  );
}
