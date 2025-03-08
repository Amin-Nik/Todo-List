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
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewLabel } from "./action";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

function NewLabelDialog({
  triggerChild,
  labelData,
}: {
  triggerChild: React.ReactNode;
  labelData: string[];
}) {
  const [newLabel, setNewLabel] = useState("");
  const [btnLoadingState, setBtnLoadingState] = useState(false);

  const handleClick = async () => {
    setBtnLoadingState(true);
    await addNewLabel(labelData, newLabel);
    setNewLabel("");
    setBtnLoadingState(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerChild}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Label</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              onChange={(e) => setNewLabel(e.target.value)}
              value={newLabel}
              id="name"
              placeholder="New Label 1"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"destructive"}>Cancel</Button>
          </DialogClose>
          {btnLoadingState ? (
            <Button disabled>
              <LoaderCircle className="animate-spin" />
              please wait...
            </Button>
          ) : (
            <Button onClick={handleClick}>Save</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default NewLabelDialog;
