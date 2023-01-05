import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClosingButton } from "../../assets/svg";
import { getIsCollapsedSelector } from "../../store/selectors";
import { mainSlice } from "../../store/slice";
import style from "./Navbar.module.css";

const Hamburger = () => {
  const isCollapsed = useSelector(getIsCollapsedSelector());
  const dispatch = useDispatch();

  const toggleButton = () => {
    dispatch(mainSlice.actions.toggleCollapse());
  };

  return (
    <div className="float-right p-3">
      {!isCollapsed ? (
        <div onClick={toggleButton} className="cursor-pointer">
          <ClosingButton />
        </div>
      ) : (
        <div
          className={`cursor-pointer ${style.button_m}`}
          onClick={toggleButton}
        >
          <Hamburger />
        </div>
      )}
    </div>
  );
};

export default Hamburger;
