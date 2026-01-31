/*
 * FILE: Error.component.js
 * ROLE: This is an "Error Boundary" fallback UI. 
 * ARCHITECTURE: In React Router v6+, you provide this to the 'errorElement' property 
 * in your route configuration. If any component in that route tree crashes or a 
 * route is not found (404), React Router swaps the main content for this component.
 */

import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  /**
   * --- HOOKS: ROUTE ERROR ---
   * useRouteError is a special hook provided by react-router-dom.
   * It catches the error object (including 404s, 500s, or JS runtime errors) 
   * that occurred during navigation or rendering.
   */
  const err = useRouteError();

  return (
    /**
     * --- UI: FULL PAGE WRAPPER ---
     * bg-gradient-to-br: Creates a sophisticated 'Bottom-Right' linear gradient.
     * via-white: Adds a middle color stop to make the transition from slate to emerald smoother.
     */
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-6">
      
      {/* --- UI: GLASSMORPHISM CARD ---
          bg-white/70: 70% opacity white background.
          backdrop-blur-xl: The 'magic' behind the frosted glass effect—it blurs whatever is behind the card.
          shadow-[...]: A custom deep shadow that gives the card extreme physical depth.
      */}
      <div
        className="max-w-xl w-full text-center p-10 rounded-3xl
        bg-white/70 backdrop-blur-xl border border-slate-200
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]"
      >
        {/* ANIMATION: animate-bounce is a built-in Tailwind animation that makes the emoji hop. */}
        <div className="text-6xl mb-4 animate-bounce">🙊</div>

        {/* --- UI: GRADIENT TEXT ---
            bg-clip-text + text-transparent: This 'cuts' the background gradient 
            into the shape of the letters. It's a very popular modern 'sexy' UI trick.
        */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3
          bg-gradient-to-r from-slate-900 to-emerald-600
          bg-clip-text text-transparent">
          Oops! Something broke
        </h1>

        <p className="text-slate-600 mb-6 font-medium">
          Don't worry, even the best apps have bad days 😅
        </p>

        {/* --- LOGIC: DYNAMIC ERROR DATA ---
            We use 'Optional Chaining' (err?.status) because the error object might 
            not always have a status if it's a generic JavaScript error instead of 
            a Routing error.
        */}
        <div className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
          {err?.status || "Error"} • {err?.statusText || "Unexpected issue"}
        </div>

        {/* ILLUSTRATION: rounded-2xl matches the 'squircle' design language used across the app. */}
        <img
          src="https://www.shutterstock.com/image-vector/404-error-web-page-template-260nw-1912538209.jpg"
          alt="Error illustration"
          className="mx-auto rounded-2xl shadow-md max-w-full h-auto mb-8"
        />

        {/* --- UI: CALL TO ACTION (CTA) ---
            Link: Prevents a full browser refresh, maintaining the Single Page Application (SPA) state.
            active:scale-95: Shrinks the button slightly when clicked, providing tactile 'click' feedback.
        */}
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full
          bg-gradient-to-r from-emerald-600 to-emerald-500
          text-white font-semibold
          hover:shadow-lg hover:shadow-emerald-300/40
          transition-all duration-300 active:scale-95"
        >
          🔙 Take me home
        </Link>
      </div>
    </div>
  );
};

export default Error;

/**
 * REVISION / INTERVIEW NOTES:
 * * 1. ErrorElement: This component is the "Guard" of your application. Without it, 
 * a single bug in a child component could crash the entire app and show a white screen.
 * * 2. useRouteError: In an interview, mention that this hook gives you access to 
 * the 'Response' or 'Error' thrown by loaders, actions, or the render phase.
 * * 3. Tailwind Gradients: Notice we use 'bg-clip-text' for titles and 
 * 'bg-gradient-to-r' for buttons. This creates a high-contrast, premium aesthetic.
 * * 4. UX Design: Providing a "Take me home" button is critical. Never leave 
 * a user on an error page without a way to get back to the functional parts of the app.
 */