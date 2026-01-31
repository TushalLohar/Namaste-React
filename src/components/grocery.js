/*
 * FILE: grocery.js
 * ROLE: A teaser/placeholder page for the future Grocery feature.
 * PERFORMANCE: This component is Lazy Loaded (on-demand). It is not bundled 
 * in the main JS file but fetched only when the user clicks 'Grocery'.
 */

const Grocery = () => {
  return (
    /**
     * --- UI: UNIQUE BRANDING ---
     * bg-emerald-50/30: Unlike the main feed's slate background, we use a light green 
     * tint here to psychologically associate this section with 'freshness' and 'organic' produce.
     */
    <div className="min-h-[80vh] flex items-center justify-center bg-emerald-50/30 px-6">
      <div className="max-w-4xl w-full">
        
        {/* --- UI: THE HERO CARD ---
            rounded-[40px]: Large rounded corners create a friendly, modern 'squircle' shape.
            shadow-[...]: A custom emerald-tinted shadow makes the card look like it's 
            floating on a bed of light.
            relative + overflow-hidden: Essential to clip the background 'glow' circles 
            so they don't bleed outside the card.
        */}
        <div className="relative overflow-hidden bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(16,185,129,0.1)] border border-emerald-100 p-12 sm:p-20 text-center">

          {/* --- ANIMATIONS: DECORATIVE FLOATING ELEMENTS ---
              animate-bounce: Standard Tailwind animation.
              duration-[3000ms]: Overriding the default speed so each fruit bounces at 
              a different rhythm, making the UI feel more alive and less robotic.
          */}
          <div className="absolute top-10 left-10 text-4xl animate-bounce duration-[3000ms]">🥦</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-bounce duration-[2000ms]">🍎</div>
          <div className="absolute top-20 right-20 text-2xl opacity-50 rotate-12">🍇</div>

          <div className="relative z-10 space-y-8">
            {/* TAGLINE: bg-emerald-100 provides a subtle highlight without being distracting. */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-widest uppercase">
              Bite Grocery
            </span>

            {/* HEADING: font-black (900 weight) creates the strongest possible visual hierarchy. */}
            <h1 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Freshness <br />
              <span className="text-emerald-600 italic">Delivered.</span>
            </h1>

            <p className="text-slate-500 text-lg sm:text-xl font-medium max-w-lg mx-auto leading-relaxed">
              We're bringing the farm to your front door. Get ready for the freshest
              produce and daily essentials at your fingertips.
            </p>

            {/* --- UI: CATEGORY PILLS ---
                .map(): We use an array of strings to generate these pills dynamically.
                hover:scale-105: Provides subtle interactive feedback when the user 
                explores the coming categories.
            */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {['Fruits', 'Vegetables', 'Dairy', 'Bakery'].map((item) => (
                <div 
                  key={item} 
                  className="px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100 text-slate-600 font-bold text-sm shadow-sm transition-transform hover:scale-105 cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* --- UI: PRIMARY ACTION ---
                bg-slate-900: A dark button creates a high-contrast 'Call to Action' (CTA).
                active:scale-95: Creates a 'squishy' button feel, mimicking a physical click.
            */}
            <div className="pt-8">
              <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 hover:bg-emerald-600 hover:shadow-emerald-100 transition-all duration-300 active:scale-95">
                Notify Me When Launched
              </button>
            </div>
          </div>

          {/* BACKGROUND DECOR: blur-3xl creates a soft atmospheric glow behind the text. */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;

/**
 * REVISION / INTERVIEW NOTES:
 * * 1. Lazy Loading (Code Splitting): Mention that this file is a separate 'chunk'. 
 * This optimizes the 'Main Thread' because the browser doesn't load the Grocery 
 * code until it's actually needed.
 * * 2. Branding via Color: Notice how we shifted from 'Slate' to 'Emerald' as 
 * the primary accent here. This creates 'Visual Context' for a different service type.
 * * 3. Accessibility: Even for a placeholder, using <h1> for the main title 
 * and semantic <span> tags for taglines helps screen readers understand page structure.
 * * 4. Micro-interactions: Custom bounce durations and hover-scaling make 
 * static pages feel high-quality and "premium".
 */