/*
 * FILE: Shimmer_component.js
 * ROLE: A "Skeleton Screen" that serves as a placeholder while the app is loading.
 * ARCHITECTURE: This is a "Dummy Component"—it has no logic, state, or props.
 * It is carefully designed to match the EXACT layout of Body.component.js 
 * to prevent "Layout Shift" (where content jumps when it finally loads).
 */

const Shimmer = () => {
  return (
    /**
     * --- UI: MAIN WRAPPER ---
     * bg-slate-50/50: Matches the background of the main Body component.
     * min-h-screen: Ensures the loading state covers the whole page.
     */
    <div className="bg-slate-50/50 min-h-screen pt-12">
      
      {/* --- UI: SKELETON HEADER ---
          This section mimics the Search Bar and Filter Buttons.
          animate-pulse: A built-in Tailwind animation that makes the opacity 
          fade in and out, creating a "breathing" effect that signals "Loading...".
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12 flex flex-col md:flex-row gap-8 justify-between">
        <div className="space-y-4">
          {/* Mock Title and Subtitle */}
          <div className="h-10 w-72 bg-slate-200 rounded-2xl animate-pulse" />
          <div className="h-4 w-48 bg-slate-200 rounded-lg animate-pulse opacity-60" />
        </div>
        <div className="flex gap-4">
          {/* Mock Search Bar and Filter Button */}
          <div className="h-14 w-64 bg-slate-200 rounded-2xl animate-pulse" />
          <div className="h-14 w-32 bg-slate-200 rounded-2xl animate-pulse" />
        </div>
      </div>

      {/* --- UI: SKELETON GRID ---
          We use the exact same grid classes as the Body component 
          (grid-cols-1 to grid-cols-4) so the placeholders are positioned 
          exactly where the real cards will appear.
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          
          /**
           * --- LOGIC: GENERATING MOCK CARDS ---
           * Array.from({ length-8 }): A JavaScript trick to create an array of 8 
           * undefined items so we can .map() over them to create 8 skeleton cards.
           * Note: We use 'i' (index) as a key here because these items are static 
           * and won't ever change order.
           */
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-full bg-white rounded-2rem p-3 space-y-6 shadow-sm border border-slate-100"
            >
              {/* IMAGE SKELETON: Matches the h-[190px] and rounded-[1.7rem] of the real cards. */}
              <div className="h-190px w-full bg-slate-200 rounded-[1.7rem] animate-pulse" />

              {/* CONTENT SKELETON: Mimics the restaurant name and cuisine text. */}
              <div className="px-3 pb-4 space-y-4">
                <div className="space-y-3">
                  <div className="h-6 w-3/4 bg-slate-200 rounded-lg animate-pulse" />
                  <div className="h-4 w-1/2 bg-slate-100 rounded-lg animate-pulse" />
                </div>

                {/* FOOTER SKELETON: Mimics the Budget info and Arrow button. */}
                <div className="pt-5 border-t border-slate-50 flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="h-2.5 w-10 bg-slate-100 rounded-md animate-pulse" />
                    <div className="h-4 w-24 bg-slate-200 rounded-md animate-pulse" />
                  </div>
                  {/* The small circle mimics the circular arrow button in the real card. */}
                  <div className="h-9 w-9 bg-slate-100 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;

/**
 * REVISION / INTERVIEW NOTES:
 * * 1. Perceived Performance: Shimmer UI doesn't make the API call faster, 
 * but it makes the app "feel" faster because the user sees progress immediately.
 * * 2. Layout Shift: By making the Shimmer cards the same size as real cards, 
 * we avoid "Cumulative Layout Shift" (CLS), which is a key Google Web Vital score.
 * * 3. Array.from(): This is the industry-standard way to repeat a component 
 * for a loading state before real data exists.
 * * 4. UX Design: Notice the use of slightly different colors (slate-100 vs 
 * slate-200). This subtle variation prevents the Shimmer from looking too flat.
 */