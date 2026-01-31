/*
 * FILE: Body.component.js
 * ROLE: Home-page body: fetches restaurant list, shows search + "Top Rated" filter, and a grid of
 * restaurant cards. Handles offline state and loading (Shimmer).
 */

import Restaurantcard from "./Restaurantcard.component.js";
import Shimmer from "./shimmer_component.js";
import { API_URL } from "./utils/constants.utils.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";

const Body = () => {
  /**
   * --- HOOKS: STATE MANAGEMENT ---
   * useState is a Hook that lets you add React state to functional components.
   */
  
  // Holds the master list of restaurants from the API. We keep this "pure" so we can 
  // always revert back to the full list without making another network request.
  const [ListofRestaurents, setListofRestaurents] = useState([]);

  // This is what is actually mapped in the UI. It can be a subset of the master list 
  // (e.g., only high-rated or search-matched restaurants).
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);

  // A "Controlled Component" state. Every keystroke updates this state, making 
  // React the single source of truth for the input's value.
  const [Searchtext, setSearchtext] = useState("");

  // UI State: Helps us toggle the 'Top Rated' button look and reset filters correctly.
  const [activeFilter, setActiveFilter] = useState("all");

  /**
   * --- HOOKS: SIDE EFFECTS ---
   * useEffect runs after the component renders. 
   * The empty dependency array [] tells React to run this ONLY ONCE (on mount), 
   * similar to 'componentDidMount' in class components.
   */
  useEffect(() => {
    fetchData();
  }, []);

  /**
   * --- LOGIC: DATA FETCHING ---
   * async/await handles the asynchronous nature of fetch. 
   * We parse the JSON and use 'Optional Chaining' (?.) to safely navigate the 
   * deeply nested Swiggy API structure without crashing if a property is missing.
   */
  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();

      // Navigate the API structure to get the array of restaurant objects
      const restaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListofRestaurents(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch data from Swiggy API:", error);
    }
  };

  /**
   * --- LOGIC: SEARCH HANDLER ---
   * This function filters our master list based on the search text.
   * We convert both to lowercase to make the search case-insensitive.
   * It is defined here so it can be called by both the 'Enter' key and 'Search' button.
   */
  const handleSearch = () => {
    const filtered = ListofRestaurents.filter((res) =>
      res.info.name.toLowerCase().includes(Searchtext.toLowerCase())
    );
    setFilteredRestaurant(filtered);
    setActiveFilter("search");
  };

  // Custom hook usage: Returns a boolean based on browser's 'online'/'offline' events.
  const onlineStatus = useOnlineStatus();

  /**
   * --- CONDITIONAL RENDERING ---
   * Rule of early return: We check for 'problems' (offline/loading) before rendering the main UI.
   */

  // 1. Offline Guard: Stops the user from trying to interact with an app that can't fetch data.
  if (onlineStatus === false)
    return (
      <h1 className="text-center p-8 text-xl text-slate-700 font-bold">
        🔴 Looks like you are offline! Please check your internet connection.
      </h1>
    );

  // 2. Loading State (Shimmer): Show a 'skeleton' UI while ListofRestaurents is empty.
  // This provides a "sexy" UX compared to a blank white screen.
  return ListofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="bg-slate-50/50 min-h-screen">
      {/* --- TAILWIND UI: HEADER & CONTROLS ---
          max-w-7xl + mx-auto: Limits content width on big screens and centers it.
          backdrop-blur-sm: Creates the 'Glassmorphism' effect when combined with bg-white/50.
      */}
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-6 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Delicious bites delivered to you.
            </h2>
            <p className="text-slate-500 font-medium italic">
              Explore {ListofRestaurents.length} restaurants in your area
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* SEARCH INPUT BOX */}
            <div className="relative group">
              <input
                type="text"
                className="w-full sm:w-72 pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl shadow-sm outline-none transition-all duration-300 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500"
                placeholder="Search for food..."
                value={Searchtext}
                onChange={(e) => setSearchtext(e.target.value)}
                // Trigger handleSearch if the user hits the 'Enter' key
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>

            {/* TOP RATED FILTER BUTTON */}
            <button
              onClick={() => {
                if (activeFilter === "top") {
                  // If already filtering by top-rated, reset the view
                  setFilteredRestaurant(ListofRestaurents);
                  setActiveFilter("all");
                } else {
                  // Filter the master list for ratings > 4.2
                  const filter = ListofRestaurents.filter((res) => res.info.avgRating > 4.2);
                  setFilteredRestaurant(filter);
                  setActiveFilter("top");
                }
              }}
              // Dynamic Classing: The button changes color entirely based on 'activeFilter' state
              className={`px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 border ${
                activeFilter === "top"
                  ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              Top Rated ⭐️
            </button>
          </div>
        </div>
      </div>

      {/* --- TAILWIND UI: RESTAURANT GRID ---
          grid-cols-1 to grid-cols-4: Responsive layout changing based on screen size (breakpoints).
          gap-y-12: Vertical spacing between rows of cards.
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {FilteredRestaurant.map((restaurant) => (
            /* Link is a React Router component that prevents full page reloads (SPA behavior) */
            <Link
              key={restaurant.info.id}
              to={"/menu/" + restaurant.info.id}
              // hover:-translate-y-2: Smooth 'lift' animation on card hover
              className="group transition-transform duration-500 hover:-translate-y-2"
            >
              <Restaurantcard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;

/**
 * REVISION / INTERVIEW NOTES:
 * * 1. Why handleSearch? We extracted the logic so it could be reused by both the 'Search' 
 * button (click) and the 'Enter' key (keyboard event). This is called 'Don't Repeat Yourself' (DRY).
 * * 2. Why Shimmer? It improves 'Perceived Performance'. Users feel the app is faster if they 
 * see a placeholder rather than a blank white screen while data is traveling from the server.
 * * 3. Conditional Rendering: Notice we check 'onlineStatus' and 'ListofRestaurents.length' 
 * BEFORE we reach the main return. This is 'Guard Clause' logic.
 * * 4. Key Prop: Every item in a map() must have a unique 'key'. This allows React to 
 * identify which items changed, were added, or were removed, optimizing the re-render.
 */