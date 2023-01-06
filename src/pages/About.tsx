import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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

const avatar = require("../assets/avatar.png");

const About = () => {
  const language = useSelector(getLanguageSelector());
  return (
    <>
      <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center pt-2">
        {content[language as keyof typeof content].navbarMenu[0]}
      </h1>
      <div className="flex flex-row items-start justify-center flex-wrap gap-5 my-10 p-5">
        <div className="w-1/2 max-lg:w-full">
          {content[language as keyof typeof content].bio}
        </div>
        <img
          src={avatar}
          alt="avatar"
          width={300}
          height={300}
          className="drop-shadow-2xl rounded-md"
        />
        <div className="w-full text-center">
          <Link to="/contact">
            <button
              type="button"
              className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              {content[language as keyof typeof content].navbarMenu[2]}
            </button>
          </Link>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center my-10 p-5">
        {content[language as keyof typeof content].stack}
      </h2>
      <div className="flex flex-col flex-wrap items-center gap-4 mb-10 px-10">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="text-center">
            <HTMLIcon />
            HTML
          </div>
          <div className="text-center">
            <CSSIcon />
            CSS
          </div>
          <div className="text-center">
            <JSIcon />
            JavaScript
          </div>
          <div className="text-center">
            <TSIcon />
            TypeScript
          </div>
          <div className="text-center">
            <SASSIcon />
            SASS
          </div>
          <div className="text-center">
            <BootstrapIcon />
            Bootstrap
          </div>
          <div className="text-center">
            <TailwindIcon />
            Tailwind
          </div>
          <div className="text-center">
            <ReactIcon />
            React JS
          </div>
          <div className="text-center">
            <ReduxIcon />
            Redux
          </div>
          <div className="text-center">
            <NodeIcon />
            NODE JS
          </div>
          <div className="text-center">
            <ExpressIcon />
            Express JS
          </div>
          <div className="text-center">
            <MongoIcon />
            MongoDB
          </div>
          <div className="text-center">
            <FirebaseIcon />
            Firebase
          </div>
          <div className="text-center">
            <DockerIcon />
            Docker
          </div>
          <div className="text-center">
            <WebpackIcon />
            Webpack
          </div>
          <div className="text-center">
            <NPMIcon />
            NPM
          </div>
          <div className="text-center">
            <GitIcon />
            Git
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
