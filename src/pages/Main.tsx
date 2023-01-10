import * as React from "react";
import HeadlineMain from "../components/common/Headlines/HeadlineMain";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";
import { useSelector } from "react-redux";
import HeadlineSecond from "../components/common/Headlines/HeadlineSecond";

const Main = () => {
  const language = useSelector(getLanguageSelector());
  return (
    <>
      <div className="container flex lg:justify-around max-lg:justify-evenly p-10 flex-wrap items-center content-center anim ">
        <div>
          <HeadlineMain>
            {content[language as keyof typeof content].navbarMenu[3]}
          </HeadlineMain>
          <HeadlineSecond>
            {content[language as keyof typeof content].name.toUpperCase()}{" "}
            {content[language as keyof typeof content].profession.toUpperCase()}
          </HeadlineSecond>
        </div>
        <p>{content[language as keyof typeof content].greetings}</p>
      </div>
    </>
  );
};

export default Main;
