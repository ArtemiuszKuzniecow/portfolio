import { useSelector } from "react-redux";
import {
  BootstrapIcon,
  CSSIcon,
  DockerIcon,
  ExpressIcon,
  FirebaseIcon,
  GitIcon,
  HTMLIcon,
  JSIcon,
  MongoIcon,
  NodeIcon,
  NPMIcon,
  ReactIcon,
  ReduxIcon,
  SASSIcon,
  TailwindIcon,
  TSIcon,
  WebpackIcon,
} from "../assets/techSvg";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";

const About = () => {
  const language = useSelector(getLanguageSelector());
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl py-10 text-center">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          {content[language as keyof typeof content].navbarMenu[0]}
        </span>
      </h1>
      <p className="my-10 p-5">
        <span>{content[language as keyof typeof content].bio}</span>
      </p>
      <h2 className="text-4xl font-bold text-center my-10 p-5">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          {content[language as keyof typeof content].stack}
        </span>
      </h2>
      <div className="flex flex-col flex-wrap items-center gap-4">
        <div className="flex gap-4">
          <HTMLIcon />
          <CSSIcon />
          <JSIcon />
          <TSIcon />
        </div>
        <div className="flex gap-4">
          <SASSIcon />
          <BootstrapIcon />
          <TailwindIcon />
        </div>
        <div className="flex gap-4">
          <ReactIcon />
          <ReduxIcon />
        </div>
        <div className="flex gap-4">
          <NodeIcon />
          <ExpressIcon />
          <MongoIcon />
          <FirebaseIcon />
        </div>
        <div className="flex gap-4">
          <DockerIcon />
          <WebpackIcon />
          <NPMIcon />
          <GitIcon />
        </div>
      </div>
    </>
  );
};

export default About;
