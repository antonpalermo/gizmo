import Link from "next/link";
import { useScratchStore } from "@gizmo/store";

export default function Sidenav() {
  const scratches = useScratchStore(store => store.scratches);

  return (
    <div className="fixed inset-y-0 left-0 w-64 border border-gray-300 bg-gray-100">
      <div className="my-10 space-y-1 px-3">
        {scratches.map(scratch => (
          <Link
            key={scratch.id}
            href={{ pathname: "/[id]", query: { id: scratch.id } }}
            className="block rounded px-3 py-2 text-sm font-medium hover:bg-gray-200"
          >
            {scratch.header}
          </Link>
        ))}
      </div>
    </div>
  );
}
