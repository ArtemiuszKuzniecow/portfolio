import { useDispatch, useSelector } from "react-redux";
import { CloseIcon, OpenIcon } from "../../assets/svg";
import content from "../../content.json";
import {
  getIsCollapsedSelector,
  getLanguageSelector,
} from "../../store/selectors";
import { mainSlice } from "../../store/slice";
import LanguagePanel from "../LanguagePanel";
import style from "./Navbar.module.css";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  const isCollapsed = useSelector(getIsCollapsedSelector());
  const language = useSelector(getLanguageSelector());
  const dispatch = useDispatch();

  const toggleButton = () => {
    const storageValue = !isCollapsed;
    dispatch(mainSlice.actions.toggleCollapse());
    localStorage.setItem("akuznetsovCollapse", JSON.stringify(storageValue));
  };

  return (
    <>
      <div className="fixed text-white z-50">
        <LanguagePanel />
      </div>
      <div className="flex flex-row h-full fixed">
        <div className={!isCollapsed ? style.open : style.close}>
          <NavbarContent />
        </div>

        <div
          className={`${isCollapsed ? style.coordsOpened : style.coordsClosed}`}
        >
          {!isCollapsed ? (
            <div
              onClick={() => toggleButton()}
              className={`cursor-pointer flex items-center ${
                !isCollapsed ? style.open : style.close
              }`}
            >
              <span className="text-gray-500 text-md">
                {content[language as keyof typeof content].collapseButton}
              </span>
              <CloseIcon />
            </div>
          ) : (
            <div
              className={`cursor-pointer  ${style.button_m} ${
                !isCollapsed ? style.open : style.close
              }`}
              onClick={toggleButton}
            >
              <OpenIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
