import Head from "next/head";
import { Hero, Layout } from "../components";

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
      </main>
    </Layout>
  );
}
