/*
 * FILE: Menu.component.js
 * ROLE: Displays a detailed restaurant menu including header info and item lists.
 * ARCHITECTURE: A dynamic route component that fetches data based on a URL parameter.
 */

import Shimmer from "./shimmer_component";
import { FOOD_URL } from "./utils/constants.utils";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const Menu = () => {
  /**
   * --- HOOKS: ROUTE PARAMS ---
   * useParams is a React Router hook that extracts parameters from the URL.
   * Logic: In App.js, we defined this route as "/menu/:resID". If the user visits 
   * "/menu/123", resID will be "123".
   */
  const { resID } = useParams();

  /**
   * --- HOOKS: CUSTOM HOOK ---
   * useRestaurantMenu is a custom hook that handles the fetch logic.
   * Advantage: It separates 'Data Fetching' from 'UI Rendering' (Concern Separation).
   * It returns 'null' while loading and the 'json' data once the fetch is complete.
   */
  const restInfo = useRestaurantMenu(resID);

  /**
   * --- CONDITIONAL RENDERING: LOADING ---
   * If restInfo is null, we return the Shimmer (Skeleton UI).
   * This is a 'Guard Clause'—it prevents the code below from trying to 
   * destructure properties from 'null', which would crash the app.
   */
  if (restInfo === null) return <Shimmer />;

  /**
   * --- LOGIC: DATA DESTRUCTURING ---
   * We extract only the necessary fields from the complex API response.
   * Optional Chaining (?.) is used to safely navigate nested objects.
   */
  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, areaName } =
    restInfo?.cards[2]?.card?.card?.info;

  // Navigating the nested 'REGULAR' cards to find the list of menu items (itemCards).
  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  return (
    <main className="min-h-screen bg-slate-50/50 pb-24">
      {/* --- UI: FLOATING HEADER ---
          Uses rounded-[32px] and a deep shadow to create a 'Card' that floats 
          over the background.
      */}
      <header className="pt-12 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-4xl p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] border border-white relative overflow-hidden">
          {/* Subtle Decorative Gradient using absolute positioning and blur */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-bl-full z-0 opacity-40 transform translate-x-10 -translate-y-10"></div>

          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
                {name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-slate-500 font-medium">
                <span>{cuisines.join(", ")}</span>
                <span className="text-slate-300">•</span>
                <span>{areaName}</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-600 font-bold">{costForTwoMessage}</span>
              </div>
            </div>

            {/* RATING PILL: A mini-component style to show restaurant score. */}
            <div className="bg-white border border-slate-100 rounded-2xl p-3 shadow-sm min-w-20 text-center">
              <div className="text-emerald-600 font-black text-lg flex items-center justify-center gap-1 border-b border-slate-50 pb-1 mb-1">
                ⭐ {avgRating}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                {totalRatingsString}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- UI: SECTION DIVIDER ---
          Uses 'flex-1 bg-slate-200' on a div to create a horizontal line.
      */}
      <div className="max-w-3xl mx-auto px-6 mt-16 mb-8 flex items-center gap-4">
        <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">Menu</h2>
        <div className="h-px flex-1 bg-slate-200"></div>
        <span className="text-slate-400 font-bold text-xs tracking-widest uppercase">
          {itemCards.length} Recommendations
        </span>
      </div>

      {/* --- UI: MENU ITEM LIST --- */}
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        {itemCards.map((item) => {
          // Destructuring individual item data
          const { id, name, price, defaultPrice, description, imageId, ratings } = item.card.info;
          const rating = ratings?.aggregatedRating?.rating;

          return (
            <div
              key={id}
              className="group flex flex-col sm:flex-row justify-between items-start gap-10 pb-12 border-b border-slate-100 last:border-0 transition-all"
            >
              {/* ITEM INFO: Left Side */}
              <div className="flex-1 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {name}
                  </h3>
                  {/* Price Logic: Swiggy API prices are in paise, so we divide by 100. */}
                  <p className="text-lg font-black text-slate-700">
                    ₹{(price || defaultPrice) / 100}
                  </p>
                </div>

                {rating && (
                  <div className="flex items-center gap-1 text-sm font-bold text-amber-500 bg-amber-50 w-fit px-2 py-0.5 rounded-lg">
                    ★ {rating}
                  </div>
                )}

                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[95%]">
                  {description}
                </p>
              </div>

              {/* ITEM IMAGE: Right Side with Absolute ADD Button */}
              <div className="relative shrink-0 mx-auto sm:mx-0">
                <div className="w-39 h-36 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                  <img
                    src={FOOD_URL + imageId}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* ADD BUTTON: Absolute positioning at the bottom center of the image. */}
                <button
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2
                  w-28 py-2.5 rounded-xl
                  bg-white text-emerald-600 font-black text-xs uppercase tracking-widest
                  border border-slate-200 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)]
                  hover:bg-emerald-600 hover:text-white hover:border-emerald-600
                  transition-all duration-300 active:scale-90"
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Menu;