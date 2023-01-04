import * as React from "react";
import { Link } from "react-router-dom";
import { MailIcon, ProjectsIcon, UserIcon } from "../../assets/svg";

const NavbarMenu = () => {
  return (
    <div className="text-gray-500 text-lg m-5">
      <div className="hover:text-white flex">
        <Link to="/about" className="flex items-center">
          <UserIcon />
          About
        </Link>
      </div>
      <div className="hover:text-white flex">
        <Link to="/projects" className="flex items-center">
          <ProjectsIcon />
          Projects
        </Link>
      </div>
      <div className="hover:text-white">
        <Link to="/contacts" className="flex items-center">
          <MailIcon />
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavbarMenu;
