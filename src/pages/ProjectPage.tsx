import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import content from "../mockData/projects.json";
import { getLanguageSelector } from "../store/selectors";
import { techStack } from "../assets/techSvg";

const ProjectPage = () => {
  const language = useSelector(getLanguageSelector());
  const { id } = useParams();
  const projectInfo = Object.values(content).find((item) => item._id === id);
  console.log(projectInfo);
  console.log(techStack);

  return (
    <>
      <div>{techStack[0].HTML?.({ size: "50" })}</div>
    </>
  );
};

export default ProjectPage;
