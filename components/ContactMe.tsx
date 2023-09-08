"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "./../lib/hooks";

import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";

function ContactMe() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:my-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:trana51997@gmail.com" className="underline">
          trana51997@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg border border-black/10 px-4"
          type="email"
          placeholder="Your email"
        />

        <textarea
          placeholder="Your message"
          className="my-3 h-52 rounded-lg border border-black/10 p-4"
        />
        <button
          type="submit"
          className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}

export default ContactMe;
