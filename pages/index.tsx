import Head from "next/head";
import { Hero, Layout } from "../components";

export default function Home() {
  return (
    <Layout>
      <main className="overscroll-none max-w-[1920px] relative w-full overflow-hidden">
        <Hero />
      </main>
    </Layout>
  );
}
