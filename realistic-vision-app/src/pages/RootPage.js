import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

export default function RootPage() {
  return (
    <>
      <Navigation expand="lg" />
      <div id="app-content">
        <Outlet />
      </div>
    </>
  );
}
