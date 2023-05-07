import baseUrl from "@gizmo/utils/baseUrl";
import { Scratch } from "@prisma/client";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const request = await fetch(`${baseUrl()}/api/scratches/${query.id}`);
  const scratch = await request.json();

  if (request.status === 404) {
    return {
      notFound: true
    };
  }

  return {
    props: { scratch }
  };
};

export interface ScratchDetailsProps {
  scratch: Scratch;
}

export default function ScratchDetails({ scratch }: ScratchDetailsProps) {
  return (
    <div>
      <h1>Scratch Details</h1>
      {JSON.stringify(scratch)}
    </div>
  );
}
