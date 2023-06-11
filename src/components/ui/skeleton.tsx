import { cn } from "@gizmo/libs/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-500 opacity-25",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
