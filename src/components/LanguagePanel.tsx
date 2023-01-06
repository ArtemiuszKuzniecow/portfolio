import * as React from "react";
import { useDispatch } from "react-redux";
import { PolishFlag, RusFlag, USflag } from "../assets/svg";
import { mainSlice } from "../store/slice";

const LanguagePanel = () => {
  const dispatch = useDispatch();
  const [flagsCollapsed, setFlagsCollapsed] = React.useState<boolean>(true);
  const [currentLanguage, setCurrentLanguage] =
    React.useState<string>("english");

  const flags = {
    english: <USflag />,
    russian: <RusFlag />,
    polish: <PolishFlag />,
  };

  const handleChooseLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setFlagsCollapsed((prevState) => !prevState);
    dispatch(mainSlice.actions.toggleLanguage(lang));
  };

  return (
    <div className="m-2 ml-6 cursor-pointer">
      {flagsCollapsed ? (
        <div onClick={() => setFlagsCollapsed((prevState) => !prevState)}>
          {flags[currentLanguage as keyof typeof flags]}
        </div>
      ) : (
        Object.keys(flags).map((e) => (
          <div className="pb-1" key={e} onClick={() => handleChooseLanguage(e)}>
            {flags[e as keyof typeof flags]}
          </div>
        ))
      )}
    </div>
  );
};

export default LanguagePanel;
