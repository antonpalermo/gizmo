import EditorArea from "@gizmo/components/EditorArea";
import Layout from "@gizmo/components/Layout";
import baseUrl from "@gizmo/utils/baseUrl";
import { Scratch } from "@prisma/client";
import { JSONContent } from "@tiptap/react";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";

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
    <div className="prose mx-auto">
      <h1>{scratch.header}</h1>
      <EditorArea
        content={scratch.rawContent as JSONContent}
        isEditable={true}
      />
    </div>
  );
}

ScratchDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Home">{page}</Layout>;
};
