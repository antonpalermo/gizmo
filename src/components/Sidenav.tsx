import { useScratchStore } from "@gizmo/store";

export default function Sidenav() {
  const [scratches, setScratch] = useScratchStore(
    ({ scratches, addScratch }) => [scratches, addScratch]
  );

  return (
    <div className="fixed inset-y-0 left-0 w-64 border border-gray-300 bg-gray-100">
      <h1>gizmo</h1>
      {scratches.map(scratch => (
        <div key={scratch.id}>{scratch.header}</div>
      ))}
    </div>
  );
}
