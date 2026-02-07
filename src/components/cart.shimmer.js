const CartShimmer = () => {
  return (
    <div className="max-w-3xl mx-auto my-16 px-4 animate-pulse">
      <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
        {/* Header Shimmer */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-3">
            <div className="h-10 w-48 bg-slate-200 rounded-xl"></div>
            <div className="h-4 w-32 bg-slate-100 rounded-lg"></div>
          </div>
          <div className="h-8 w-20 bg-slate-100 rounded-full"></div>
        </div>

        {/* Item List Shimmer */}
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex justify-between gap-8 py-6 border-b border-slate-50">
            <div className="w-9/12 space-y-4">
              <div className="h-6 w-3/4 bg-slate-200 rounded-lg"></div>
              <div className="h-4 w-1/4 bg-slate-100 rounded-lg"></div>
              <div className="h-3 w-full bg-slate-50 rounded-lg"></div>
            </div>
            <div className="w-3/12 h-24 bg-slate-100 rounded-2xl"></div>
          </div>
        ))}

        {/* Bottom Total Shimmer */}
        <div className="mt-10 pt-8 border-t-2 border-dashed border-slate-100 flex justify-between">
          <div className="h-4 w-24 bg-slate-100 rounded-lg"></div>
          <div className="h-8 w-32 bg-slate-200 rounded-lg"></div>
        </div>
        
        <div className="mt-8 h-16 w-full bg-slate-200 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default CartShimmer;