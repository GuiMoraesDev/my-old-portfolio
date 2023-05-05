import { ReactNode } from "react";

import { getPinnedRepos } from "@/graphql/queries";

export const Section = async (): Promise<ReactNode> => {
  const data = await getPinnedRepos();

  console.log({ data });

  return (
    <section className="flex flex-col gap-8 p-16 text-black dark:text-white">
      <h2 className="text-2xl font-medium">Best projects</h2>

      <article className="flex flex-col gap-4 ">
        <p>
          I&apos;m an experienced front-end developer with a strong passion for
          delivering innovative, high-quality solutions.
        </p>

        <p>
          My expertise in technologies such as JavaScript, TypeScript, React,
          and CSS-in-JS allows me to create complex solutions that prioritize
          user experience.
        </p>

        <p>
          I have worked with small and medium-sized companies, honing my
          communication skills with all stakeholders involved in the development
          process.
        </p>

        <p>
          Whether working independently or as part of a team, I am an effective
          time and resource manager, and I&apos;m comfortable with every aspect
          of the development process. With a commitment to continuous learning
          and self-improvement, I stay ahead of the curve in an ever-changing
          industry.
        </p>
      </article>
    </section>
  );
};

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent`;

function Skeleton() {
  return (
    <section className="flex flex-col gap-3">
      <div className={`h-40 w-72 rounded-lg border-2 bg-gray-300 ${shimmer}`} />
      <div className={`h-4 w-4/6 rounded-md bg-gray-300 ${shimmer}`} />
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
