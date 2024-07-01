"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AlertDialogDemo() {
  const [dialogOpen, setdialogOpen] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-6">
      <AlertDialog onOpenChange={setdialogOpen} open={dialogOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log("Cancel")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log("Continue")}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button variant="destructive" onClick={() => setdialogOpen(true)}>
        Open Dialog Manually
      </Button>
    </div>
  );
}
