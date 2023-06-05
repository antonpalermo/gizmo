"use client";

import { AvatarProps } from "@radix-ui/react-avatar";
import { User } from "next-auth";

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@gizmo/components/ui/avatar";
import { Skeleton } from "@gizmo/components/ui/skeleton";

export interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

export default function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="user avatar" src={user.image} />
      ) : (
        <AvatarFallback>
          <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
