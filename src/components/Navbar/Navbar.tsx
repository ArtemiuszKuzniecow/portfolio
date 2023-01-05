import { useDispatch, useSelector } from "react-redux";
import { ClosingButton, Hamburger } from "../../assets/svg";
import { getIsCollapsedSelector } from "../../store/selectors";
import { mainSlice } from "../../store/slice";
import LanguagePanel from "../LanguagePanel";
import style from "./Navbar.module.css";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  const isCollapsed = useSelector(getIsCollapsedSelector());
  const dispatch = useDispatch();

  const toggleButton = () => {
    dispatch(mainSlice.actions.toggleCollapse());
  };

  return (
    <>
      <div className="fixed text-white z-50">
        <LanguagePanel />
      </div>
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
    </>
  );
};

export default Navbar;
