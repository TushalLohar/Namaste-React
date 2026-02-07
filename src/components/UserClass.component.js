import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="group p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl transition-all hover:-translate-y-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <div>
            <h4 className="text-xl font-black text-white leading-tight">{this.props.name}</h4>
            <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest">{this.props.loc}</p>
          </div>
        </div>
        <p className="text-slate-400 font-medium leading-relaxed italic">
          "Architecture that scales. We handle millions of requests so you can focus on your cravings."
        </p>
      </div>
    );
  }
}

export default UserClass;