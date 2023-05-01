import Image from "next/image";

import Avatar from "@gizmo/components/Avatar";

export default function Navbar() {
  return (
    <nav className="fixed left-64 right-0 top-0 bg-slate-50">
      <div className="mx-10 py-5">
        <Avatar />
      </div>
    </nav>
  );
}
