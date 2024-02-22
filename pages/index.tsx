import Head from 'next/head';
import { Hero } from '../components';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <div>
      <main className={inter.className}>
        <Hero />
      </main>
    </div>
  );
}
