import * as React from "react";
import { useSelector } from "react-redux";
import HeadlineMain from "../components/common/Headlines/HeadlineMain";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";

const Contacts = () => {
  const language = useSelector(getLanguageSelector());
  return (
    <>
      <HeadlineMain>
        {content[language as keyof typeof content].navbarMenu[2]}
      </HeadlineMain>

      <div className="m-10 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 box-border">
        <ul>
          <li>{content[language as keyof typeof content].contacts.location}</li>
          <li>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  content[language as keyof typeof content].contacts.email,
              }}
              className="rounded-md"
            />
          </li>
          <li>{content[language as keyof typeof content].contacts.phone}</li>
          <li>{content[language as keyof typeof content].contacts.telegram}</li>
          <li>{content[language as keyof typeof content].contacts.whatsapp}</li>
          <li>{content[language as keyof typeof content].contacts.viber}</li>
        </ul>
      </div>
    </>
  );
};

export default Contacts;
