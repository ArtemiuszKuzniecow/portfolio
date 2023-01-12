import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainImage from "../assets/MainImage";
import Button from "../components/common/Button/Button";
import HeadlineSecond from "../components/common/Headlines/HeadlineSecond";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";

const Main = () => {
  const language = useSelector(getLanguageSelector());
  return (
    <>
      <div className="container flex lg:justify-around max-lg:justify-evenly p-10 flex-wrap items-center content-center anim ">
        <HeadlineSecond>
          {content[language as keyof typeof content].name.toUpperCase()}{" "}
          {content[language as keyof typeof content].profession.toUpperCase()}
        </HeadlineSecond>
        <div className="flex flex-wrap justify-around">
          <div className="max-sm:hidden">
            <MainImage />
          </div>
          <div className="w-1/3 max-xl:w-full">
            <p className="italic pt-5 text-xl text-center">
              {content[language as keyof typeof content].greetings}
            </p>
            <div className="w-full flex justify-center pt-5">
              <Link to="/contacts">
                <Button>
                  {content[language as keyof typeof content].navbarMenu[2]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
