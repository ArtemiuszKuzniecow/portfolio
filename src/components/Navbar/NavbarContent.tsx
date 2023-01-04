import * as React from "react";
import NavbarMenu from "./NavbarMenu";
import NavbarProfile from "./NavbarProfile";

const NavbarContent = () => {
  return (
    <div className="flex flex-col bg-gray-900 h-full px-4">
      <NavbarProfile />
      <NavbarMenu />
    </div>
  );
};

export default NavbarContent;
