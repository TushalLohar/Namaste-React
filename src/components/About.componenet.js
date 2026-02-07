import React from "react";
import User from "./user.component";
import UserClass from "./UserClass.component";

class About extends React.Component {
  render() {
    return (
      <div className="min-h-screen bg-white font-sans text-slate-900">
        {/* --- HERO SECTION: MISSION --- */}
        <section className="relative py-28 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
              Freshness. <br />
              <span className="text-emerald-500">In Record Time.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
              Our mission is simple: To bridge the gap between your hunger and the city's 
              best kitchens with absolute quality and zero delay.
            </p>
          </div>
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        </section>

        {/* --- CORE VALUES GRID --- */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-200/50">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">On-Time, Every Time</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                We’ve optimized every second of the delivery chain. From the moment you tap 'Order' 
                to the knock at your door, speed is our priority.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-200/50">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Premium Quality</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                We only partner with restaurants that share our obsession with hygiene and flavor. 
                If it isn't the best, it isn't on Bite.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all hover:shadow-2xl hover:shadow-slate-200/50">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Safe & Secure</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                From contactless delivery to tamper-proof packaging, your safety is cooked into 
                everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* --- TEAM SECTION --- */}
        <section className="pb-32 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black tracking-tighter">The Team</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-2">Powering the Bite engine</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
             <User name="Tushal Lohar" location="Frontend Architect" />
             <UserClass name="Engineering Team" loc="Infrastructure" />
          </div>
        </section>
      </div>
    );
  }
}

export default About;