/*
 * FILE: Contact.component.js
 * ROLE: Contact page providing static "Get in Touch" information.
 * ARCHITECTURE: This is a "Pure Functional Component" or "Presentational Component."
 * Unlike Body.js, it has no state (useState) or side effects (useEffect).
 * It simply receives no props and returns a fixed UI structure.
 */

const Contact = () => {
  return (
    /**
     * --- UI: MAIN WRAPPER ---
     * min-h-[calc(100vh-80px)]: This ensures the contact page at least fills the 
     * remaining screen height (Screen height minus Header height).
     * bg-slate-50/50: Using a very light slate tint to make the white cards "pop" 
     * off the background.
     */
    <div className="min-h-[calc(100vh-80px)] bg-slate-50/50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* --- SECTION: HEADER ---
            Uses font-black (900 weight) for a high-end editorial feel.
            The emerald-600 span provides a brand-consistent focal point.
        */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-black tracking-tight text-slate-900">
            Get in <span className="text-emerald-600">Touch</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
            Have a question about your order or just want to say hi?
            Our team is always here to help you out.
          </p>
        </div>

        {/* --- UI: GRID LAYOUT ---
            grid-cols-1 md:grid-cols-3: A responsive grid. On mobile, cards stack vertically.
            On medium screens (768px+) and above, they snap into three equal columns.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* --- CARD COMPONENT: EMAIL ---
              rounded-[32px]: Large border-radius for the modern 'squircle' look.
              group: Applied to parent so we can trigger child animations (like icon scale) on hover.
              hover:-translate-y-1: Smoothly lifts the card 4px up on hover.
          */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            {/* ICON CONTAINER: group-hover:bg-emerald-600 changes bg color when the WHOLE card is hovered. */}
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-500 font-medium mb-4">Response within 2 hours</p>
            {/* mailto: protocol opens the user's default email client automatically. */}
            <a href="mailto:support@foodapp.com" className="text-emerald-600 font-bold hover:underline">
              support@foodapp.com
            </a>
          </div>

          {/* --- CARD COMPONENT: PHONE --- */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-500 font-medium mb-4">Mon-Sun, 9am - 11pm</p>
            {/* tel: protocol allows mobile users to click and dial directly. */}
            <a href="tel:+919876543210" className="text-emerald-600 font-bold hover:underline">
              +91 98765 43210
            </a>
          </div>

          {/* --- CARD COMPONENT: ADDRESS --- */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <span className="text-2xl group-hover:scale-110 transition-transform">📍</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Mumbai, Maharashtra,<br />India
            </p>
          </div>

        </div>

        {/* --- UI: SUPPORT HOURS BANNER ---
            bg-slate-900: Deep dark background to provide visual contrast to the rest of the light page.
            relative + overflow-hidden: Necessary to clip the decorative "blur" circle inside the banner.
        */}
        <div className="bg-slate-900 rounded-[40px] p-10 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-2">Customer Support Hours</h2>
            <p className="text-emerald-400 font-mono text-lg tracking-widest uppercase">
              Monday – Sunday • 09:00 AM - 11:00 PM
            </p>
          </div>
          {/* DECORATIVE ELEMENT:
              Absolute positioning places this circle regardless of text flow.
              blur-3xl: Softens the edges to create a "Glow" effect popular in modern UI.
          */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

/**
 * REVISION / INTERVIEW NOTES:
 * * 1. Why no useEffect? Since this page only shows static information that 
 * doesn't change based on API data or user input, we don't need any side effects.
 * * 2. Tailwind Hover Groups: By adding 'group' to a parent and 'group-hover' 
 * to a child, we create a synchronized animation where moving the mouse 
 * anywhere on the card triggers the icon color change.
 * * 3. Semantic HTML: Even though we style with Tailwind, using <a> tags 
 * with tel: and mailto: ensures the browser knows how to handle the data 
 * for accessibility and native functionality.
 */