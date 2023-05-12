import Avatar from "@gizmo/components/Avatar";
import { useModal } from "@gizmo/store";

export default function Navbar() {
  const toggle = useModal(state => state.toggle);

  return (
    <nav className="fixed left-64 right-0 top-0 z-10 bg-slate-50 py-5">
      <div className="inline-flex w-full items-center justify-end overflow-x-hidden px-10">
        <div className="inline-flex items-center space-x-2">
          <button
            onClick={toggle}
            className="rounded px-3 py-2 text-sm font-medium hover:bg-gray-200"
          >
            Create
          </button>
          <Avatar />
        </div>
      </div>
    </nav>
  );
}
