import * as React from "react";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import { RouteObject, useRoutes, Navigate } from "react-router-dom";

const Routes: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  return useRoutes(routes);
};

export default Routes;
