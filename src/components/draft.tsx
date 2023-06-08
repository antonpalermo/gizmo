"use client";

import * as React from "react";

import Link from "next/link";
import { Blog } from "@prisma/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@gizmo/components/ui/dropdown-menu";
import { formatDate } from "@gizmo/libs/utils";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader
} from "@gizmo/components/ui/alert-dialog";

import { useDialog } from "@gizmo/store";

export interface DraftProps {
  blog: Blog;
}

function DraftMenu() {
  const setIsOpen = useDialog(state => state.toggle);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted">
        <EllipsisVerticalIcon className="h-5 w-5" />
        <span className="sr-only">Open</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={""}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setIsOpen()}
          className="flex cursor-pointer items-center text-destructive focus:text-destructive"
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DraftDeleteDialog() {
  const [isOpen, setIsOpen] = useDialog(state => [state.isOpen, state.toggle]);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          Are you sure you want to delete this draft?
        </AlertDialogHeader>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600 focus:ring-red-600">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function Draft({ blog }: DraftProps) {
  return (
    <div className="inline-flex items-center justify-between  rounded-md border p-5">
      <div>
        <Link
          href={""}
          className="mb-2 block text-2xl font-bold hover:underline"
        >
          {blog.title}
        </Link>
        <p className="text-sm font-medium leading-none text-gray-500">
          {formatDate(blog.createdAt.toDateString())}
        </p>
      </div>
      <DraftMenu />
      <DraftDeleteDialog />
    </div>
  );
}
