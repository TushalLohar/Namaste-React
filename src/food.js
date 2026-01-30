import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.component.js";
import Body from "./components/Body.component.js";
// import About from "./components/About.componenet.js";
import Contact from "./components/Contact.component.js";
import Error from "./components/Error.component.js";
import Menu from "./components/Menu.component.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/grocery.js"));

const About = lazy(() => import("./components/About.componenet.js"));

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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/menu/:resID",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const swiggy = ReactDOM.createRoot(document.getElementById("swiggy"));
swiggy.render(<RouterProvider router={appRouter} />);
