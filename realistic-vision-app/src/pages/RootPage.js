import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

export default function RootPage() {
  const content = useContext(AppContext);
  const [selectedLanguage, setSelectedLanguage] = useState("bg");
  const [outletContent] = useState(content.pages[selectedLanguage]);
  return (
    <>
      <Navigation expand="lg" lang={selectedLanguage} {...content.app} />
      <div id="app-content">
        <Outlet context={[outletContent]} />
      </div>
    </>
  );
}
