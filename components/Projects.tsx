"use client";

import React from "react";

import { useSectionInView } from "./../lib/hooks";
import { projectsData } from "./../lib/data";

import SectionHeading from "./SectionHeading";
import Project from "./Project";
import MiniDivider from "./MiniDivider";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div className="flex flex-col items-center justify-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
            <MiniDivider />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
