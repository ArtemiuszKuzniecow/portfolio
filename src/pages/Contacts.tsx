import * as React from "react";
import { useSelector } from "react-redux";
import {
  EmailIcon,
  LocationIcon,
  TelegramIcon,
  TelephoneIcon,
  ViberIcon,
  WhatsAppIcon,
} from "../assets/contactsSvg";
import { Facebook, Github, Linkedin, Twitter } from "../assets/svg";
import HeadlineMain from "../components/common/Headlines/HeadlineMain";
import HeadlineSecond from "../components/common/Headlines/HeadlineSecond";
import content from "../content.json";
import { getLanguageSelector } from "../store/selectors";

const Contacts = () => {
  const language = useSelector(getLanguageSelector());
  return (
    <>
      <HeadlineMain>
        {content[language as keyof typeof content].navbarMenu[2]}
      </HeadlineMain>

      <div className="m-10 p-4 max-sm:px-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-10 box-border flex justify-around flex-wrap">
        <div className="w-1/2 max-md:w-full">
          <h2 className="font-medium leading-tight text-2xl max-sm:text-sm mt-0 mb-2 word-wrap">
            {content[language as keyof typeof content].contactsMessage}
          </h2>
          <ul>
            <li className="flex items-center gap-3 py-2 px-0 max-sm:m-0 max-sm:text-xs text-wrap">
              <LocationIcon />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content[language as keyof typeof content].contacts.location,
                }}
              />
            </li>
            <li className="flex items-center gap-3 py-2 max-sm:text-xs">
              <EmailIcon />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content[language as keyof typeof content].contacts.email,
                }}
              />
            </li>
            <li className="flex items-center gap-3 py-2 max-sm:text-xs">
              <TelephoneIcon />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content[language as keyof typeof content].contacts.phone,
                }}
              />
            </li>
            <li className="flex items-center gap-3 py-2 max-sm:text-xs">
              <TelegramIcon />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content[language as keyof typeof content].contacts.telegram,
                }}
              />
            </li>
            <li className="flex items-center gap-3 py-2 max-sm:text-xs">
              <WhatsAppIcon />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content[language as keyof typeof content].contacts.whatsapp,
                }}
              />
            </li>
            <li className="flex items-center gap-3 py-2 max-sm:text-xs">
              <ViberIcon />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    content[language as keyof typeof content].contacts.viber,
                }}
              />
            </li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          width={500}
          height="auto"
          className="max-lg:hidden rounded-md drop-shadow-2xl"
        />
      </div>
      <HeadlineSecond>
        {content[language as keyof typeof content].socialMediaMessage}:
      </HeadlineSecond>
      <div className="flex flex-row justify-center flex-wrap">
        <a
          href="https://www.facebook.com/artemiusz.kuzniecow/"
          target="_blank"
          className="flex items-center hover:text-neutral-500"
        >
          <Facebook />
          FACEBOOK
        </a>

        <a
          href="https://twitter.com/arty_harmonica"
          target="_blank"
          className="flex items-center hover:text-neutral-500"
        >
          <Twitter />
          TWITTER
        </a>
        <a
          href="https://github.com/ArtemiuszKuzniecow"
          target="_blank"
          className="flex items-center hover:text-neutral-500"
        >
          <Github /> GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/kuznetsov-artem/"
          target="_blank"
          className="flex items-center hover:text-neutral-500"
        >
          <Linkedin />
          LINKEDIN
        </a>
      </div>
    </>
  );
};

export default Contacts;
