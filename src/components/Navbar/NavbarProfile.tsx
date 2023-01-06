import * as React from "react";
import { Facebook, Github, Twitter, Linkedin } from "../../assets/svg";
import { Link } from "react-router-dom";
import content from "../../content.json";
import { useSelector } from "react-redux";
import {
  getIsCollapsedSelector,
  getLanguageSelector,
} from "../../store/selectors";

const avatar = require("../../assets/avatar.png");

const NavbarProfile = () => {
  const isCollapsed = useSelector(getIsCollapsedSelector());
  const language = useSelector(getLanguageSelector());

  return (
    <div
      className={`flex flex-col ${!isCollapsed ? "items-center" : "items-end"}`}
    >
      <Link to="/">
        <img
          src={avatar}
          alt="avatar"
          width={!isCollapsed ? 120 : 50}
          className="rounded-full border-8 border-gray-600 mt-14"
        />
      </Link>
      <h1 className="text-white text-center font-semibold text-4xl w-52">
        {!isCollapsed && content[language as keyof typeof content].name}
      </h1>
      {!isCollapsed && (
        <div className="flex flex-row">
          <a
            href="https://www.facebook.com/artemiusz.kuzniecow/"
            target="_blank"
          >
            <Facebook />
          </a>
          <a href="https://twitter.com/arty_harmonica" target="_blank">
            <Twitter />
          </a>
          <a href="https://github.com/ArtemiuszKuzniecow" target="_blank">
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/kuznetsov-artem/"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavbarProfile;
