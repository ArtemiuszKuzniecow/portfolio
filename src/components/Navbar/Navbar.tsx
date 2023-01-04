import * as React from "react";
import { ClosingButton, Hamburger } from "../../assets/svg";
import style from "./Navbar.module.css";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const toggleButton = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  return (
    <div className="flex flex-row justify-between w-full h-full fixed">
      <div className={!isCollapsed ? style.open : style.close}>
        <NavbarContent />
      </div>
      <div className="float-right cursor-pointer p-3" onClick={toggleButton}>
        {!isCollapsed ? (
          <ClosingButton />
        ) : (
          <div className={style.button_m}>
            <Hamburger />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
