const User = ({ name, location }) => {
  return (
    <div className="group p-8 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-100 transition-all hover:-translate-y-2">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
        </div>
        <div>
          <h4 className="text-xl font-black text-slate-900 leading-tight">{name}</h4>
          <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest">{location}</p>
        </div>
      </div>
      <p className="text-slate-500 font-medium leading-relaxed italic">
        "Our goal is to make the digital experience as satisfying as the first bite of a warm meal."
      </p>
    </div>
  );
};

export default User;