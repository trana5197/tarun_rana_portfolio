"use client";

import Image from "next/image";
import Link from "next/link";

import { HiArrowDownTray, HiArrowRight } from "react-icons/hi2";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

import { useSectionInView } from "./../lib/hooks";

import tarun_rana_potrait from "public/tarun_rana_potrait.png";
import { useActiveContext } from "./../context/activeSectionContext";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveContext();

  return (
    <section
      className="max-w-[50rem] scroll-mt-[100rem] text-center"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={tarun_rana_potrait}
              alt="Tarun Rana portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-[1.25rem] font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm
        <span className="font-bold"> Tarun Rana.</span> I'm a Enthusiastic
        <span className="font-bold"> full-stack developer</span> with
        <span className="font-bold"> 3+ years of </span>
        professional experience in <span className="italic">web </span>
        <span className="italic">& software development</span> and a strong
        ability and willingness to{" "}
        <span className="underline">learn new technologies</span> to
        <span className="underline"> deliver better solutions.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 focus:scale-110 focus:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <HiArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="/Tarun_Rana_Resume.pdf"
          download
        >
          Download CV{" "}
          <HiArrowDownTray className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/tarunrana05/"
          target="_blank"
        >
          <BsLinkedin size={27} />
        </a>

        <a
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/trana5197"
          target="_blank"
        >
          <FaGithubSquare size={30} />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
