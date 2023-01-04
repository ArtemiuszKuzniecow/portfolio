import * as React from "react";
import { Facebook, Github, Twitter, Linkedin } from "../../assets/svg";
import { Link } from "react-router-dom";

const avatar = require("../../assets/avatar.png");

const NavbarProfile = () => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/">
        <img
          src={avatar}
          alt="avatar"
          width={120}
          className="rounded-full border-8 border-gray-600 my-4"
        />
        <h1 className="text-white font-semibold text-4xl">Artem</h1>
      </Link>
      <div className="flex flex-row">
        <a href="https://www.facebook.com/artemiusz.kuzniecow/" target="_blank">
          <Facebook />
        </a>
        <a href="https://twitter.com/arty_harmonica" target="_blank">
          <Twitter />
        </a>
        <a href="https://github.com/ArtemiuszKuzniecow" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/kuznetsov-artem/" target="_blank">
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default NavbarProfile;
