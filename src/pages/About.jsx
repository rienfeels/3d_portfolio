import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import React from "react";
import { skills, education, projects } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ryan
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Full Stack Web and Software Developer based in Greenville, South
          Carolina with an appreciation for UI/UX design and Artificial
          Intelligence / Large Language Models. Although i'm excited to jump
          into any new languages / technologies.
        </p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          View my resume
        </a>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
      </div>

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20" key={skill.name}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Education</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I recently graduated from Carolina Code School's 17th cohort for
            full stack development.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {education.map((educationItem) =>
              educationItem.points.map((point, index) => (
                <VerticalTimelineElement
                  key={`education-point-${index}`}
                  date={index === 0 ? educationItem.date : ""}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={educationItem.iconUrl}
                        alt={educationItem.school_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: educationItem.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomStyle: educationItem.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    {index === 0 && (
                      <>
                        <h3 className="text-black text-xl font-poppins font-semibold">
                          {educationItem.title}
                        </h3>
                        <p
                          className="text-black-500 font-medium font-base"
                          style={{ margin: 0 }}
                        >
                          {educationItem.school_name}
                        </p>
                      </>
                    )}
                    <p className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </p>
                  </div>
                </VerticalTimelineElement>
              ))
            )}
          </VerticalTimeline>
          {/* <VerticalTimeline>
            {projects.map((projects) => (
              <VerticalTimelineElement>
                <div>
                  <h3>{projects.name}</h3>
                  <p>{projects.description}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline> */}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
