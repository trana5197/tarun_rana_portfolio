"use client";

import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "./../lib/hooks";
import { experiencesData } from "./../lib/data";

import SectionHeading from "./SectionHeading";
import { useThemeContext } from "../context/themeContext";

function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  const { theme } = useThemeContext();

  return (
    <section ref={ref} id="experience" className="my-20 scroll-mt-28">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? ".4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5",
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{exp.title}</h3>
              <p className="!mt-0 font-normal">{exp.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {exp.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
