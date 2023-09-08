"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { useSectionInView } from "./../lib/hooks";

import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

import { sendEmail } from "../actions/sendEmail";

function ContactMe() {
  const { ref } = useSectionInView("Contact", 0.5);

  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  function resetForm() {
    setSenderEmail("");
    setMessage("");
  }

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
          resetForm();
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10 px-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
          placeholder="Your email"
        />

        <textarea
          placeholder="Your message"
          name="message"
          className="my-3 h-52 rounded-lg border border-black/10 p-4"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={5000}
        />
        <div className="flex items-center justify-around">
          <button
            onClick={resetForm}
            className="h-[3rem] w-[8rem] rounded-full bg-gray-300 outline-none transition-all hover:scale-110 hover:bg-gray-200 focus:scale-110 active:scale-105"
          >
            Cancel
          </button>
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}

export default ContactMe;
