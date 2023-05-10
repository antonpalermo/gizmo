import { ReactElement, useEffect } from "react";

import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";

import { useScratchStore } from "@gizmo/store";

import baseUrl from "@gizmo/utils/baseUrl";

import Navbar from "@gizmo/components/Navbar";
import Sidenav from "@gizmo/components/Sidenav";
import EditorArea from "@gizmo/components/EditorArea";
import Layout from "@gizmo/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const getServerSideProps: GetServerSideProps = async () => {
  const request = await fetch(`${baseUrl()}/api/scratches`);
  const scratches = await request.json();

  return {
    props: { scratches }
  };
};

export interface HomeProps {
  scratches: [];
}

export default function Home({ scratches }: HomeProps) {
  return <h1>Sample</h1>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Home">{page}</Layout>;
};
