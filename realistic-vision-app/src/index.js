import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/AppRouter";
import { AppContext } from "./contexts/AppContext";
import appcontent from "./app-content.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContext.Provider value={appcontent}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  </React.StrictMode>
);
