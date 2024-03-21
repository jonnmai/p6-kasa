import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import Home from "./pages/Home/Home"
import About from "./pages/About/About";


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
        element: <h1>Logement</h1>,
      },
      {
        path: '*',
        element: <h1>Error</h1>,
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
