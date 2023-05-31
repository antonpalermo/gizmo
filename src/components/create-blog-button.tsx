"use client";

import { useRouter } from "next/navigation";

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

  return (
    <button
      onClick={onClick}
      className="rounded border border-gray-100 bg-white px-3 py-2"
    >
      New blog post
    </button>
  );
}
