import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${styles.main}`}>
      {/* className={`${styles.main}`} 없이하면 출력이 좀 이상하게 나옴 */}
      <Head>
        <title>Next로 만든 사이트</title>
        <meta name="description" content="Next로 만들었습니당" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>next로 만든 사이트</h1>
    </div>
  );
}
