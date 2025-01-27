"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

interface SegmentData {
  value: number
  color: string
  label: string
}

interface MultiSegmentProgressBarProps {
  segments: SegmentData[]
  className?: string
}

export function MultiSegmentProgressBar({ segments, className = "" }: MultiSegmentProgressBarProps) {
  const totalValue = segments.reduce((sum, segment) => sum + segment.value, 0)
  const normalizedSegments = segments.map(segment => ({
    ...segment,
    normalizedValue: (segment.value / totalValue) * 100
  }))

  return (
    <div className={`relative h-4 w-full overflow-hidden rounded-full bg-secondary ${className}`}>
      {normalizedSegments.map((segment, index) => {
        const leftPosition = normalizedSegments
          .slice(0, index)
          .reduce((sum, s) => sum + s.normalizedValue, 0)

        return (
          <div
            key={index}
            className="absolute top-0 h-full"
            style={{
              left: `${leftPosition}%`,
              width: `${segment.normalizedValue}%`,
              backgroundColor: segment.color,
            }}
          />
        )
      })}
    </div>
  )
}
