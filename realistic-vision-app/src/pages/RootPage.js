import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export default function RootPage() {
  const content = useContext(AppContext);

  const [selectedLanguage, setSelectedLanguage] = useState("bg");

  const [outletContent, setOutletContent] = useState(
    content.pages[selectedLanguage]
  );

  const [navLinks, setNavlinks] = useState(
    content.app?.navlinks[selectedLanguage]
  );

  const onChangeContent = (langClickEvent) => {
    const lang = langClickEvent.currentTarget?.name;
    if (lang != "bg" && lang != "en") {
      //if lang is different than current supported languages (avoid bugs)
      return;
    }

    if (lang !== selectedLanguage) {
      setSelectedLanguage(lang);
      setOutletContent(content?.pages[lang]);
      setNavlinks(content?.app?.navlinks[lang]);
    }
  };

  return (
    <>
      <Navigation
        expand="lg"
        logo={content?.app?.logo}
        title={content?.app?.title}
        offcanvasNavbarLabel={content?.app?.offcanvasNavbarLabel}
        navlinks={navLinks}
        onLangChange={onChangeContent}
      />
      <Outlet context={[outletContent]} />
    </>
  );
}
