import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MailIcon, ProjectsIcon, UserIcon } from "../../assets/svg";
import { getLanguageSelector } from "../../store/selectors";
import content from "../../content.json";

const NavbarMenu = () => {
  const language = useSelector(getLanguageSelector());

  return (
    <div className="text-gray-500 text-lg m-5">
      <div className="hover:text-white flex">
        <Link to="/about" className="flex items-center">
          <UserIcon />
          {content[language as keyof typeof content].navbarMenu[0]}
        </Link>
      </div>
      <div className="hover:text-white flex">
        <Link to="/projects" className="flex items-center">
          <ProjectsIcon />
          {content[language as keyof typeof content].navbarMenu[1]}
        </Link>
      </div>
      <div className="hover:text-white">
        <Link to="/contacts" className="flex items-center">
          <MailIcon />
          {content[language as keyof typeof content].navbarMenu[2]}
        </Link>
      </div>
    </div>
  );
};

export default NavbarMenu;
