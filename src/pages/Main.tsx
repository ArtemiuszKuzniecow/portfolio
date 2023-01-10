import * as React from "react";
import HeadlineMain from "../components/common/Headlines/HeadlineMain";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";
import { useSelector } from "react-redux";

const Main = () => {
  const language = useSelector(getLanguageSelector());
  return (
    <HeadlineMain>
      {content[language as keyof typeof content].navbarMenu[3]}
    </HeadlineMain>
  );
};

export default Main;
