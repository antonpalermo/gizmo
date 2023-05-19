"use client";

import { User } from "next-auth";
import Image from "next/image";

export interface UserAvatarProps {
  user: Pick<User, "image" | "name">;
}

export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Image
      className="rounded-full block"
      width={35}
      height={35}
      src={user.image || ""}
      alt={`${user.name} avatar`}
    />
  );
}