import Headline from "@gizmo/components/headline";
import DashboardShell from "@gizmo/components/shell";
import { Skeleton } from "@gizmo/components/ui/skeleton";

export default function DraftsLoadingPage() {
  return (
    <DashboardShell>
      <Headline>
        <div>
          <Skeleton className="mb-2 h-10 w-32" />
          <Skeleton className="h-6 w-40" />
        </div>
      </Headline>
      <div className="my-10 grid grid-cols-1 gap-3">
        <Skeleton className="h-[96px] w-full" />
        <Skeleton className="h-[96px] w-full" />
        <Skeleton className="h-[96px] w-full" />
      </div>
    </DashboardShell>
  );
}
