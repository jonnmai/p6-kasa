import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Logement from "./pages/Logement/Logement";


const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'logement/:logementId',
        element: <Logement />,
      },
      {
        path: '*',
        element: <Error />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
