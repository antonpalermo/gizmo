import Avatar from "@gizmo/components/Avatar";

export default function Navbar() {
  return (
    <nav className="fixed left-64 right-0 top-0 z-50 bg-slate-50 py-5">
      <div className="overflow-x-hidden px-10">
        <Avatar />
      </div>
    </nav>
  );
}
