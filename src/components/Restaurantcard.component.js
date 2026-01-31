/*
 * FILE: Restaurantcard.component.js
 * ROLE: Displays a summary of a restaurant in the main Body grid.
 * ARCHITECTURE: A 'Presentation' component that receives 'resData' as a prop.
 */

import { CDN_URL } from "./utils/constants.utils";

const Restaurantcard = ({ resData }) => {
  /**
   * --- LOGIC: PROPS & DESTRUCTURING ---
   * resData is an object containing all restaurant info. 
   * Destructuring allows us to use variables like 'name' directly instead 
   * of 'resData.name'.
   */
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData;

  /**
   * --- LOGIC: DERIVED STATE ---
   * We decide whether to show a 'Top Rated' badge based on the rating. 
   * This logic keeps the JSX cleaner.
   */
  const isTopRated = avgRating >= 4.5;

  return (
    /**
     * --- UI: CARD CONTAINER ---
     * rounded-[2rem]: Extreme rounded corners for a premium 'pebble' look.
     * hover:shadow-[...]: Applies a deep, large shadow only on hover to give 'lift'.
     */
    <div className="group relative w-70 bg-white rounded-4xl p-2 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]">
      
      {/* --- UI: IMAGE BOX --- */}
      <div className="relative h-47.5 w-full overflow-hidden rounded-[1.7rem] shadow-sm">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* GRADIENT OVERLAY: Makes text labels on the image (like Delivery Time) readable. */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* --- UI: BADGES (ABSOLUTE) --- */}
        <div className="absolute top-3 left-3 flex gap-2">
          {/* Conditional Rendering: Only shows if avgRating >= 4.5 */}
          {isTopRated && (
            <div className="bg-emerald-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg tracking-tighter uppercase">
              Top Rated
            </div>
          )}
          {/* Glassmorphism Rating Badge */}
          <div className="bg-white/80 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <span className="text-amber-500 text-xs">★</span>
            <span className="text-slate-900 text-xs font-black tracking-tighter">{avgRating}</span>
          </div>
        </div>

        {/* DELIVERY TIME PILL */}
        <div className="absolute bottom-3 right-3 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
          {sla.deliveryTime} MINS
        </div>
      </div>

      {/* --- UI: TEXT CONTENT --- */}
      <div className="pt-5 pb-3 px-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-emerald-600 transition-colors duration-300">
            {name}
          </h3>
        </div>

        {/* cuisines.join: API gives an array; we convert it to a comma-separated string. */}
        <p className="text-slate-500 text-sm font-medium mt-1 line-clamp-1 italic opacity-80">
          {cuisines.join(", ")}
        </p>

        {/* --- UI: CARD FOOTER ---
            Features a small 'Price for two' detail and a decorative arrow.
        */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Budget</span>
            <span className="text-sm font-black text-slate-800">{costForTwo}</span>
          </div>

          {/* Interactive Arrow: Changes color when the WHOLE card is hovered. */}
          <div className="h-8 w-8 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors duration-300">
             <span className="text-slate-400 text-xs group-hover:text-white transition-colors">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurantcard;

/**
 * REVISION / INTERVIEW NOTES:
 * * 1. Props vs State: This component uses Props (resData). Props are read-only and passed 
 * from parent to child. State is managed internally (like in Body.js).
 * * 2. Key Prop: When mapping this component in Body.js, we MUST provide a unique 'key' 
 * (like restaurant.info.id) so React can track changes efficiently.
 * * 3. Group Hover: By adding 'group' to the wrapper and 'group-hover:...' to children, 
 * we coordinate multiple animations (zoom, color change, lift) with one mouse movement.
 * * 4. Antialiasing: The tracking-tighter and font-black classes ensure the text 
 * looks sharp and premium, mimicking high-end apps like Uber Eats.
 */