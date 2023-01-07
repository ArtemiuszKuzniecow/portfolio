import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MailIcon, ProjectsIcon, UserIcon } from "../../assets/svg";
import {
  getIsCollapsedSelector,
  getLanguageSelector,
} from "../../store/selectors";
import content from "../../content.json";

const NavbarMenu = () => {
  const isCollapsed = useSelector(getIsCollapsedSelector());
  const language = useSelector(getLanguageSelector());

  return (
    <div
      className={`text-gray-500 text-lg ${
        isCollapsed ? "flex flex-col items-end" : "m-5"
      }`}
    >
      <div className={`hover:text-white  ${isCollapsed ? "float-right" : ""}`}>
        <Link to="/about" className="flex items-center gap-3">
          <UserIcon />
          {!isCollapsed &&
            content[language as keyof typeof content].navbarMenu[0]}
        </Link>
      </div>
      <div className={`hover:text-white  ${isCollapsed ? "float-right" : ""}`}>
        <Link to="/projects" className="flex items-center gap-3">
          <ProjectsIcon />
          {!isCollapsed &&
            content[language as keyof typeof content].navbarMenu[1]}
        </Link>
      </div>
      <div className={`hover:text-white  ${isCollapsed ? "float-right" : ""}`}>
        <Link to="/contacts" className="flex items-center gap-3">
          <MailIcon />
          {!isCollapsed &&
            content[language as keyof typeof content].navbarMenu[2]}
        </Link>
      </div>
    </div>
  );
};

export default NavbarMenu;
