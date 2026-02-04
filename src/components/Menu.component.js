/*
 * FILE: Menu.component.js
 * ROLE: Displays a detailed restaurant menu including header info and item lists.
 * ARCHITECTURE: A dynamic route component that fetches data based on a URL parameter.
 */

import Shimmer from "./Shimmer.component";
import { FOOD_URL } from "./utils/constants.utils";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestCategory from "./RestCategory.component";
import { useState } from "react";

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
  console.log(restInfo);

  const [showIndex, setShowIndex] = useState(null);

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
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
  } = restInfo?.cards[2]?.card?.card?.info;

  // Navigating the nested 'REGULAR' cards to find the list of menu items (itemCards).
  const itemCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) =>
        x.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  console.log(categories);

  return (
    <header className="pt-12 px-6 text-center">
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
              <span className="text-emerald-600 font-bold">
                {costForTwoMessage}
              </span>
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

        {categories.map((category, index) => (
          //controlled component
          <RestCategory
            key={category?.card?.card.categoryId}
            data={category?.card?.card}
            ShowItems={index === showIndex ? true : false}
            // Logic: If already open, set to null (close), else set to index (open)
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </header>
  );
};

export default Menu;
