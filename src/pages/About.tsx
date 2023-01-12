import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { techStack } from "../assets/techSvg";
import Button from "../components/common/Button/Button";
import HeadlineMain from "../components/common/Headlines/HeadlineMain";
import HeadlineSecond from "../components/common/Headlines/HeadlineSecond";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";

const avatar = "https://iili.io/HYx8EI2.png";

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
        <div className="w-full flex justify-center">
          <Link to="/contacts">
            <Button>
              {content[language as keyof typeof content].navbarMenu[2]}
            </Button>
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
