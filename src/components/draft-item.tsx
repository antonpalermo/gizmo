"use client";

import * as React from "react";

import { Blog } from "@prisma/client";
import { formatDate } from "@gizmo/libs/utils";

import Link from "next/link";
import DraftMenu from "@gizmo/components/draft-menu";
import DraftDeleteDialog from "@gizmo/components/draft-dialog";

export interface DraftItemProps {
  blog: Blog;
}

export default function DraftItem({ blog }: DraftItemProps) {
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
      <DraftDeleteDialog id={blog.id} />
    </div>
  );
}
