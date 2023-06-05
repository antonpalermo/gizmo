"use client";

import { useRouter } from "next/navigation";
import { Button } from "@gizmo/components/ui/button";

export default function CreateBlogButton() {
  const router = useRouter();

  async function onClick() {
    const request = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const blogId = await request.json();

    router.refresh();
    router.push(`/edit/${blogId.id}`);
  }

  return <Button onClick={onClick}>Create New Blog</Button>;
}
