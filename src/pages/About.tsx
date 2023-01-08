import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { techStack } from "../assets/techSvg";
import HeadlineMain from "../components/common/HeadlineMain";
import HeadlineSecond from "../components/common/HeadlineSecond";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";

const avatar = require("../assets/avatar.png");

const About = () => {
  const language = useSelector(getLanguageSelector());
  return (
    <>
      <HeadlineMain>
        {content[language as keyof typeof content].navbarMenu[0]}
      </HeadlineMain>
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
          <Link to="/contacts">
            <button
              type="button"
              className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              {content[language as keyof typeof content].navbarMenu[2]}
            </button>
          </Link>
        </div>
      </div>

      <HeadlineSecond>
        {content[language as keyof typeof content].stack}
      </HeadlineSecond>

      <div className="flex flex-col flex-wrap items-center gap-4 mb-10 px-10">
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((item) => (
            <div className="text-center" key={Object.keys(item)[0]}>
              {Object.values(item)[0]?.({ size: "80" })}
              {Object.keys(item)[0]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
