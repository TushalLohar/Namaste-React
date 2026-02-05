/*
 * FILE: Header.component.js
 * ROLE: The global navigation hub of the application.
 * ARCHITECTURE: This component is "Static-Dynamic". It stays at the top of the app 
 * but re-renders when the URL changes or when the local login state is toggled.
 */

import { LOGO_URL } from "./utils/constants.utils";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Header = () => {
  /**
   * --- HOOKS: STATE & CUSTOM ---
   * useState: Manages local UI state for the Login button. 
   * Note: This state resets on page refresh because it is not persisted in LocalStorage or Redux.
   */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useOnlineStatus: A custom hook that listens to browser 'online' and 'offline' events.
  // It provides a real-time boolean used for the status indicator dot.
  const onlineStatus = useOnlineStatus();

  /**
   * --- HOOKS: ROUTING ---
   * useLocation: A hook from react-router-dom that returns the current 'location' object.
   * We specifically use 'location.pathname' to identify which link should look "Active".
   */
  const location = useLocation();

  /**
   * --- LOGIC: DYNAMIC STYLING ---
   * This function returns a string of Tailwind classes based on the current URL.
   * If the current path matches the link, we apply 'text-emerald-600' to highlight it.
   */
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `relative py-1 text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out ${
      isActive ? "text-emerald-600" : "text-slate-500 hover:text-slate-900"
    } group`;
  };

  /**
   * --- UI: SUB-COMPONENT (Underline) ---
   * This is a helper component used for the "Sexy" animated underline effect.
   * Logic: The width ('w-full' vs 'w-0') is determined by the current path.
   * 'group-hover:w-full' allows the line to expand when the parent <li> is hovered.
   */
  const Underline = ({ path }) => (
    <span className={`absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
      location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'
    }`}></span>
  );

  const {loggedInUser} = useContext(UserContext);

  return (
    /**
     * --- UI: GLASSMORPHISM HEADER ---
     * sticky top-0: Fixes the header to the top of the viewport.
     * bg-white/70 + backdrop-blur-xl: Creates the modern "frosted glass" effect.
     */
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12 h-20">

        {/* LOGO SECTION: Uses 'hover:scale-[1.02]' for a subtle interactive "pop" effect. */}
        <Link to="/" className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative">
             <img className="w-12 h-12 object-contain rounded-xl shadow-sm" src={LOGO_URL} alt="Logo" />
             
             {/* STATUS DOT: Changes color from emerald (online) to rose (offline) based on custom hook state. */}
             <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm transition-colors duration-500 ${
               onlineStatus ? "bg-emerald-500" : "bg-rose-500"
             }`}></div>
          </div>
          <span className="text-2xl font-black tracking-tighter bg-linear-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent hidden sm:inline">
            BITE
          </span>
        </Link>

        {/* NAVIGATION: Uses flexbox for alignment and spacing. */}
        <nav>
          <ul className="flex items-center gap-6 md:gap-10">
            <li>
              <Link to="/" className={getLinkClass("/")}>
                Home <Underline path="/" />
              </Link>
            </li>
            <li>
              <Link to="/About" className={getLinkClass("/About")}>
                About <Underline path="/About" />
              </Link>
            </li>
            <li>
              <Link to="/Contact" className={getLinkClass("/Contact")}>
                Contact <Underline path="/Contact" />
              </Link>
            </li>
            <li>
              <Link to="/Grocery" className={getLinkClass("/Grocery")}>
                Grocery <Underline path="/Grocery" />
              </Link>
            </li>

            {/* CART ICON: Features a relative notification badge with 'group-hover:scale-110'. */}
            <li className="relative group cursor-pointer ml-2">
              <div className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 group-hover:text-emerald-600 transition-colors">
                  <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <span className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform">
                  3
                </span>
              </div>
            </li>

            {/* LOGIN BUTTON: Features a complex "Slide-in" animation using 'overflow-hidden'. 
                The 'invisible' span ensures the button width stays constant even when text changes. */}
            <li className="ml-2">
              <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="relative inline-flex items-center justify-center px-7 py-2.5 overflow-hidden font-bold text-white transition duration-300 ease-out bg-slate-900 rounded-full shadow-lg group active:scale-95"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-emerald-600 group-hover:translate-x-0 ease">
                  {isLoggedIn ? 'Bye! 👋' : 'Let\'s Go! 🚀'}
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  {isLoggedIn ? "Logout" : "Login"}
                </span>
                <span className="relative invisible">{isLoggedIn ? "Logout" : "Login"}</span>
                
              </button>
             
            </li>
             <li className="font-bold">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

/**
 * REVISION / INTERVIEW NOTES:
 * * 1. Single Page Application (SPA): By using <Link> instead of <a> tags, React Router 
 * handles navigation internally without a full browser refresh.
 * * 2. Hook Re-renders: When location.pathname changes, useLocation() triggers a 
 * re-render of the Header, allowing the active styles to update instantly.
 * * 3. Responsive Breakpoints: 'hidden sm:inline' ensures text labels don't clutter 
 * the mobile view, while 'md:gap-10' expands spacing for larger screens.
 * * 4. Micro-interactions: 'active:scale-95' and 'group-hover' animations make 
 * the UI feel like a high-end native mobile application.
 */