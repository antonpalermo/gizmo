"use client";

import { useDialog } from "@gizmo/store";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@gizmo/components/ui/dropdown-menu";

import Link from "next/link";

export default function DraftMenu() {
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
