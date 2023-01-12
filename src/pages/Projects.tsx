import { useSelector } from "react-redux";
import HeadlineMain from "../components/common/Headlines/HeadlineMain";
import ProjectCard from "../components/common/ProjectCard/ProjectCard";
import content from "../content.json";
import projects from "../mockData/projects.json";
import { getLanguageSelector } from "../store/selectors";
import { techStack } from "../assets/techSvg";

const keys = "https://iili.io/HYx8emQ.jpg";

const Projects = () => {
  const language = useSelector(getLanguageSelector());

  return (
    <>
      <HeadlineMain>
        {content[language as keyof typeof content].navbarMenu[1]}
      </HeadlineMain>
      <div className="flex flex-row items-start justify-center flex-wrap gap-5 my-10">
        <div
          className="w-1/2 max-md:w-full pl-2"
          dangerouslySetInnerHTML={{
            __html:
              content[language as keyof typeof content].projectsPresentation,
          }}
        />
        <img
          src={keys}
          width={400}
          className="max-lg:hidden rounded-md drop-shadow-2xl"
        />
      </div>
      <div className="flex flex-wrap justify-center mt-5">
        <ProjectCard
          image={projects.feaClients.image}
          id={projects.feaClients._id}
        >
          <div className="flex flex-wrap gap-3 justify-center p-3">
            {techStack.map((item) => {
              if (projects.feaClients.stack.includes(Object.keys(item)[0]))
                return (
                  <div key={Object.keys(item)[0]}>
                    {Object.values(item)[0]?.({ size: "40" })}
                  </div>
                );
            })}
          </div>
        </ProjectCard>

        <ProjectCard
          image={projects.urlShortener.image}
          id={projects.urlShortener._id}
        >
          <div className="flex flex-wrap gap-3 justify-center p-3">
            {techStack.map((item) => {
              if (projects.urlShortener.stack.includes(Object.keys(item)[0]))
                return (
                  <div key={Object.keys(item)[0]}>
                    {Object.values(item)[0]?.({ size: "40" })}
                  </div>
                );
            })}
          </div>
        </ProjectCard>
        <ProjectCard image={projects.todoList.image} id={projects.todoList._id}>
          <div className="flex flex-wrap gap-3 justify-center p-3">
            {techStack.map((item) => {
              if (projects.todoList.stack.includes(Object.keys(item)[0]))
                return (
                  <div key={Object.keys(item)[0]}>
                    {Object.values(item)[0]?.({ size: "40" })}
                  </div>
                );
            })}
          </div>
        </ProjectCard>
      </div>
    </>
  );
};

export default Projects;
