import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";

export default function projects({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>Next로 만든 사이트</title>
        <meta name="description" content="Next로 만들었습니당" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>전체 프로젝트: {projects.results.length}</h1>
      {projects.results.map((project) => (
        <h1>{project.properties.이름.title[0].plain_text}</h1>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
      page_size: 100, // 100페이지까지 가져와라
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  console.log(projects);

  const projectNames = projects.results.map(
    (project) => project.properties.이름.title[0].plain_text
    // .title[0].plain_text
  );

  console.log(JSON.stringify(projectNames)); // 이걸로 [object Object] 안 데이터를 볼 수 있음

  console.log(`projectNames: ${projectNames}`);

  return {
    props: { projects },
  };
}
