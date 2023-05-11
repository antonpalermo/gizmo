import Link from "next/link";

import { PlusIcon } from "@heroicons/react/24/outline";
import { useScratchStore } from "@gizmo/store";

export default function Sidenav() {
  const scratches = useScratchStore(store => store.scratches);

  return (
    <div className="fixed inset-y-0 left-0 w-64 border border-gray-300 bg-gray-100">
      <div className="my-10 space-y-1 px-3">
        <Link
          href={{ pathname: "/" }}
          className="block rounded px-3 py-2 text-sm font-medium hover:bg-gray-200"
        >
          Home
        </Link>
        <hr />
        <div className="inline-flex w-full items-center justify-between px-3 py-2">
          <span className="text-sm font-medium text-slate-600">Scratches</span>
        </div>
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
