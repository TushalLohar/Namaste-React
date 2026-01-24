import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.component.js";
import Body from "./components/Body.component.js";
import About from "./components/About.componenet.js";
import Contact from "./components/Contact.component.js";
import Error from "./components/Error.component.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const swiggy = ReactDOM.createRoot(document.getElementById("swiggy"));
swiggy.render(<RouterProvider router={appRouter} />);
