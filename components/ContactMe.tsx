"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "./../lib/hooks";

import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

import { sendEmail } from "../actions/sendEmail";

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

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10 px-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <textarea
          placeholder="Your message"
          name="message"
          className="my-3 h-52 rounded-lg border border-black/10 p-4"
          required
          maxLength={5000}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default ContactMe;
