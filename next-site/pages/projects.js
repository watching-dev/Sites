import Layout from "@/components/layout";
import Head from "next/head";

export default function projects() {
  return (
    <Layout>
      <Head>
        <title>Next로 만든 사이트</title>
        <meta name="description" content="Next로 만들었습니당" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트</h1>
    </Layout>
  );
}
