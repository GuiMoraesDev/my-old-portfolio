import { GithubLogo, Link } from "@phosphor-icons/react";
import Image from "next/image";
import { ReactNode } from "react";

import { getPinnedRepos } from "@/graphql/queries";

export const Section = async (): Promise<ReactNode> => {
  const data = await getPinnedRepos();

  return (
    <section className="flex w-full flex-col gap-8 p-16 text-black dark:text-white">
      <h2 className="text-2xl font-medium">Best projects</h2>

      <ul className="flex flex-col gap-6">
        {data?.map((project, index) => (
          <li
            key={project.id}
            className={`flex flex-col gap-3 translate-x-${index * 3}`}
          >
            <Image
              src={`https://raw.githubusercontent.com/GuiMoraesDev/${project.title}/main/public/img/cover.png`}
              alt={project.title}
              width={320}
              height={168}
              className="h-40 w-72 overflow-hidden rounded-lg border-2 object-cover"
              style={{ height: "100%" }}
            />

            <section className="flex w-full items-center justify-between">
              <p className="capitalize">{project.title}</p>

              <nav className="flex items-center gap-8">
                <a href={project.project_link} target="_blank">
                  <Link size={20} />
                </a>

                <a href={project.github_link} target="_blank">
                  <GithubLogo size={20} />
                </a>
              </nav>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
};

function Skeleton() {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent`;

  return (
    <section className="flex flex-col gap-3">
      <div className={`h-40 w-72 rounded-lg border-2 bg-gray-300 ${shimmer}`} />

      <div className="flex items-center justify-between">
        <span className={`h-4 w-3/6 rounded-md bg-gray-300 ${shimmer}`} />
        <span className={`h-4 w-2/6 rounded-md bg-gray-300 ${shimmer}`} />
      </div>
    </section>
  );
}

export const Loading = () => {
  return (
    <section className="flex w-full flex-col gap-8 p-16 text-black dark:text-white">
      <h2 className="text-2xl font-medium">Best projects</h2>

      <ul className="flex flex-col gap-6">
        <li>
          <Skeleton />
        </li>

        <li className="translate-x-3">
          <Skeleton />
        </li>

        <li className="translate-x-6">
          <Skeleton />
        </li>
      </ul>
    </section>
  );
};
