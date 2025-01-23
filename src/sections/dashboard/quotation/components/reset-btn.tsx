"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ROUTES } from "@/config/routes";
import { InsuranceFormReset } from "@/server/insurance";
import { UserTypes } from "@/types/user";
import { useRouter } from "next/navigation";


import { useState } from "react";

export default function ResetBtn({ user }: { user: UserTypes }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
      }}>
      <DialogTrigger asChild>
        <Button className="my-4 w-full sm:w-1/2" variant={"destructive"}>
          Reset Form
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your all
            saved forms progress.
          </DialogDescription>
          <DialogFooter>
            <Button
              variant={"destructive"}
              type="submit"
              onClick={async () => {
                sessionStorage.removeItem("quotes");
                await InsuranceFormReset(user);
                router.push(ROUTES.DASHBOARD.QUOTATION.ROOT('coverage-selection'));
              }}>
              Reset
            </Button>
            <Button variant={"secondary"} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
