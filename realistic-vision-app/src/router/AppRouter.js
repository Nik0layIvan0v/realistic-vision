import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import Servicespage from "../pages/ServicesPage";
import GalleryPage from "../pages/GalleryPage";
import ContactUsPage from "../pages/ContactUsPage";
import ErrorPage from "../pages/ErrorPage";
import RootPage from "../pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "our-services",
        element: <Servicespage />,
      },
      {
        path: "our-gallery",
        element: <GalleryPage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
