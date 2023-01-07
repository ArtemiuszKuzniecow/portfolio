import * as React from "react";
import { useSelector } from "react-redux";
import HeadlineMain from "../components/common/HeadlineMain";
import { getLanguageSelector } from "../store/selectors";
import content from "../content.json";
import ProjectCard from "../components/common/ProjectCard/ProjectCard";
import projects from "../mockData/projects.json";

const Projects = () => {
  const language = useSelector(getLanguageSelector());

  return (
    <>
      <HeadlineMain>
        {content[language as keyof typeof content].navbarMenu[1]}
      </HeadlineMain>
      <div
        className="mt-5 p-3"
        dangerouslySetInnerHTML={{
          __html:
            content[language as keyof typeof content].projectsPresentation,
        }}
      />
      <div className="flex flex-wrap justify-center mt-5">
        <ProjectCard
          image={projects.feaClients.image}
          id={projects.feaClients._id}
        >
          <p>hi</p>
        </ProjectCard>
        <ProjectCard image={projects.todoList.image} id={projects.todoList._id}>
          <p>hi</p>
        </ProjectCard>
        <ProjectCard
          image={projects.urlShortener.image}
          id={projects.urlShortener._id}
        >
          <p>hi</p>
        </ProjectCard>
      </div>
    </>
  );
};

export default Projects;
