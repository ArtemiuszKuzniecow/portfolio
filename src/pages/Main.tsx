import * as React from "react";
import HeadlineMain from "../components/common/Headlines/HeadlineMain";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";
import { useSelector } from "react-redux";
import HeadlineSecond from "../components/common/Headlines/HeadlineSecond";
import MainImage from "../assets/MainImage";

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
            <HeadlineMain>
              {content[language as keyof typeof content].navbarMenu[3]}
            </HeadlineMain>
            <p className="pt-5">
              {content[language as keyof typeof content].greetings}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
