"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogHeader,
  AlertDialogFooter
} from "@gizmo/components/ui/alert-dialog";

import { useDialog } from "@gizmo/store";
import { useRouter } from "next/navigation";

export default function DraftDeleteDialog({ id }: { id: string }) {
  const [isOpen, toggle] = useDialog(state => [state.isOpen, state.toggle]);

  const router = useRouter();

  async function proceedDelete() {
    const request = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    if (request.status == 204) {
      router.refresh();
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={toggle}>
      <AlertDialogContent>
        <AlertDialogHeader>
          Are you sure you want to delete this draft?
        </AlertDialogHeader>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async e => {
              e.preventDefault();
              await proceedDelete();
              toggle();
            }}
            className="bg-red-600 focus:ring-red-600"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
