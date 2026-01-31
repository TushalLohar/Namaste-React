/*
 * FILE: App.js (Main Entry Point)
 * ROLE: Configures the entire React application, including the Root Layout, 
 * Client-Side Routing, and Performance optimizations like Code Splitting.
 * ARCHITECTURE: Uses a "Layout Pattern" where Header stays constant while 
 * the content inside <Outlet /> changes based on the URL.
 */

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// --- STANDARD IMPORTS ---
// These components are bundled in the "Main" JS file because they are 
// needed immediately when the app loads (Critical path).
import Header from "./components/Header.component.js";
import Body from "./components/Body.component.js";
import Contact from "./components/Contact.component.js";
import Error from "./components/Error.component.js";
import Menu from "./components/Menu.component.js";
import Shimmer from "./components/shimmer_component.js";

/**
 * --- PERFORMANCE: LAZY LOADING (Code Splitting) ---
 * React.lazy: This function lets you render a dynamic import as a regular component.
 * Why? It creates a separate 'chunk' (JS file) for these components.
 * Benefit: The user doesn't download the "About" or "Grocery" code unless they 
 * actually navigate to those pages. This keeps the initial load time very fast.
 */
const Grocery = lazy(() => import("./components/grocery.js"));
const About = lazy(() => import("./components/About.componenet.js"));

/**
 * --- COMPONENT: APP LAYOUT ---
 * This serves as the "Shell" of your application.
 */
const Applayout = () => {
  return (
    // 'antialiased' is a Tailwind utility that makes fonts look smoother/crisper.
    <div className="min-h-screen bg-slate-50/30 font-sans antialiased text-slate-900">
      <Header />
      
      {/* --- THE OUTLET ---
        <Outlet /> is a component from react-router-dom. 
        It acts as a placeholder. Whatever 'child' route is active 
        (Body, About, Contact, etc.) will be rendered right here.
      */}
      
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
};

/**
 * --- CONFIGURATION: BROWSER ROUTER ---
 * createBrowserRouter: The modern way to define routes in React Router v6.
 * We define a 'root' route (Applayout) and 'children' routes.
 */
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />, // The parent layout
    children: [
      {
        path: "/",
        element: <Body />, // Default view
      },
      {
        path: "/About",
        element: (
          /**
           * --- SUSPENSE ---
           * Suspense is a wrapper required when using React.lazy.
           * Since lazy-loaded components take time to fetch over the network, 
           * 'fallback' defines what the user sees during that wait.
           * Sexy UI Choice: We use our <Shimmer /> instead of a simple "Loading..." text.
           */
          <Suspense fallback={<Shimmer />}>
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
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/menu/:resID", // Dynamic Routing: ':resID' is a variable parameter
        element: <Menu />,
      },
    ],
    // errorElement: This handles 404s or crashes anywhere in the app tree.
    errorElement: <Error />,
  },
]);

// --- RENDERING ---
// We grab the root element from our HTML and render the 'RouterProvider' 
// which injects our 'appRouter' config into the app.
const swiggy = ReactDOM.createRoot(document.getElementById("swiggy"));
swiggy.render(<RouterProvider router={appRouter} />);

/**
 * REVISION / INTERVIEW NOTES:
 * 1. Single Page Application (SPA): This setup allows the app to change pages 
 * without the browser ever refreshing. Only the components inside <Outlet /> change.
 * 2. Code Splitting: Mention lazy/Suspense. This is crucial for large-scale 
 * production apps to maintain a high "Lighthouse" performance score.
 * 3. Dynamic Routes: Explain that '/menu/:resID' allows us to use one single 
 * Menu component to display data for any restaurant based on its ID.
 * 4. Error Boundary: Having 'errorElement' at the top level prevents a 
 * white screen of death if any child component fails to render.
 */