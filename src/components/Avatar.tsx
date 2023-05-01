import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Avatar() {
  const { data, status } = useSession({ required: true });

  if (status === "loading") {
    return (
      <div className="h-10 w-10 animate-pulse rounded-full bg-slate-500" />
    );
  }

  return (
    <Image
      src={data.user?.image!}
      className="float-right rounded-full"
      width={40}
      height={40}
      alt={`${data.user?.name} avatar`}
      priority={true}
    />
  );
}
