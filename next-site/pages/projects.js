import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
        <Head>
          <title>Next로 만든 사이트</title>
          <meta name="description" content="Next로 만들었습니당" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          전체 프로젝트:
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
          {projects.results.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </div>
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
  console.log(JSON.stringify(projects.results)); // 이걸로 [object Object] 안 데이터를 볼 수 있음

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
