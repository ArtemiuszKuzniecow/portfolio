import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import projects from "../mockData/projects.json";
import { getLanguageSelector } from "../store/selectors";
import { GitIcon, techStack } from "../assets/techSvg";
import HeadlineMain from "../components/common/Headlines/HeadlineMain";
import Button from "../components/common/Button/Button";
import HeadlineSecond from "../components/common/Headlines/HeadlineSecond";
import content from "../content.json";
import { Github, GithubIcon, WebIcon } from "../assets/svg";

const ProjectPage = () => {
  const language = useSelector(getLanguageSelector());
  const { id } = useParams();
  const projectInfo = Object.values(projects).find((item) => item._id === id);

  return (
    <>
      <HeadlineMain>{projectInfo?.name}</HeadlineMain>
      <div className="container flex flex-wrap p-4 my-10">
        <div className="w-1/2 max-lg:w-full px-4 box-border">
          <div className="h-full">
            <img
              src={projectInfo?.image}
              width={600}
              className="p-4 rounded-md border-2 border-sky-100 p-5 m-auto"
            />
            <div className="flex flex-row justify-evenly py-6">
              <a href={projectInfo?.deploy} target="_blank">
                <Button>
                  <WebIcon />
                  Deploy
                </Button>
              </a>
              <a href={projectInfo?.github} target="_blank">
                <Button>
                  <GithubIcon />
                  Github
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* CARD */}
        <div className="w-1/2 max-lg:w-full px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 box-border">
          {content[language as keyof typeof content].descriptionText}:{" "}
          {
            projectInfo?.description[
              language as keyof typeof projectInfo.description
            ]
          }
          <HeadlineSecond>STACK:</HeadlineSecond>
          <div className="flex flex-col flex-wrap items-center gap-4 mb-10">
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((item) => {
                if (projectInfo?.stack.includes(Object.keys(item)[0]))
                  return (
                    <div key={Object.keys(item)[0]}>
                      {Object.values(item)[0]?.({ size: "80" })}
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
