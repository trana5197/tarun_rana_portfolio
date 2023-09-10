"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "./../lib/hooks";

import SectionHeading from "./SectionHeading";

function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] scroll-mt-28 text-center leading-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        I am a highly motivated Full Stack Developer based in{" "}
        <span className="font-medium">Dallas, Texas</span>, with a strong
        academic foundation and hands-on experience in computer science. I hold
        a <span className="font-medium">Master's degree</span> in Computer
        Science from{" "}
        <span className="font-medium">University of Texas at Arlington</span>{" "}
        with <span className="font-medium">3.75 GPA</span> and previously
        completed my <span className="font-medium">Bachelor's degree</span> in{" "}
        <span className="font-medium">Computer Engineering</span>
        from <span className="font-medium">University of Mumbai</span>.
      </p>{" "}
      <p className="mb-4">
        My technical skill set encompasses a wide array of programming
        languages, including{" "}
        <span className="font-medium">
          JavaScript, TypeScript, Python, R, PHP, C++, and C#,
        </span>{" "}
        complemented by proficiency in various frameworks and tools such as{" "}
        <span className="font-medium">
          React.js, Next.js, Node.js, Laravel, Git,
        </span>{" "}
        and more. With expertise in frontend and backend development, I excel at
        creating user-friendly interfaces, optimizing server performance, and
        effectively managing databases. Throughout my career, I've had the
        privilege of working on impactful projects, including web applications
        deployed on leading cloud platforms like{" "}
        <span className="font-medium">
          Microsoft Azure, AWS, Vercel, and netlify
        </span>
        . My commitment to excellence is evident in my work, which ranges from
        developing multi-layer neural networks for image classification to
        integrating real-time data analysis through APIs. My personal portfolio
        website, built with the latest technologies, reflects my dedication to
        delivering visually stunning and responsive designs.
      </p>
      <p>
        When <span className="font-medium">I'm not coding</span>, I enjoy
        playing soccer, or going to gym, swimming or run. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning philosophy and cooking.
      </p>
      <p>
        I'm enthusiastic about taking on{" "}
        <span className="font-medium">new challenges</span>, expanding my
        knowledge, and contributing my skills to{" "}
        <span className="font-medium">innovative projects</span> that make a
        positive difference. Let's connect and explore how I can help bring your
        ideas to fruition.
      </p>
    </motion.section>
  );
}

export default About;
