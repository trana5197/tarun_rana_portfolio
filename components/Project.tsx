"use client";

import { useRef } from "react";
import Link from "next/link";

import { useScroll, motion, useTransform } from "framer-motion";

import { projectsData } from "./../lib/data";

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, githubLink }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="max-w-[42rem] rounded-lg border border-black/5 bg-gray-100 px-5 pb-6 pt-4 transition-all hover:bg-gray-200  dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:p-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <ul className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description.map((desc, index) => (
            <li key={index}>&bull; {desc}</li>
          ))}
        </ul>
        <ul className="mb-8 mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white dark:text-white/70"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={githubLink}
          target="_blank"
          className="-hover:translate-y-1 block w-[6rem] rounded-md bg-[#fbe2e3] py-1 pl-3 transition hover:scale-110 hover:bg-[#fbe2e9] hover:font-medium active:translate-y-[0.1rem] dark:bg-[#676394]"
        >
          GitHub &rarr;
        </Link>
      </section>
    </motion.div>
  );
}

export default Project;
