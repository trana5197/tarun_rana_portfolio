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

function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section ref={ref} id="experience" className="my-20 scroll-mt-28">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: ".4rem solid #9ca3af",
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{exp.title}</h3>
              <p className="!mt-0 font-normal">{exp.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
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
