import ItemList from "./itemList.component";

const RestCategory = ({ data, ShowItems, setShowIndex }) => {
  
  const handleClick = () => {
    // If it's already open, clicking it again should close it (toggle logic)
    setShowIndex();
  };

  return (
    <div className="mb-4 overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all duration-300">
      {/* Accordion Header */}
      <div
        className={`flex justify-between items-center p-5 cursor-pointer transition-all duration-300 ${
          ShowItems ? "bg-slate-50/80" : "bg-white hover:bg-slate-50"
        }`}
        onClick={handleClick}
      >
        <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
          ShowItems ? "text-emerald-600" : "text-slate-800"
        }`}>
          {data.title} <span className="text-slate-400 font-medium ml-1 text-sm">({data.itemCards.length})</span>
        </span>
        
        {/* Animated Chevron */}
        <div className={`transition-transform duration-500 transform ${ShowItems ? "rotate-180" : "rotate-0"}`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={ShowItems ? "text-emerald-500" : "text-slate-400"}
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>

      {/* Accordion Body with smooth reveal */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          ShowItems ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-2 pb-4">
             <ItemList items={data.itemCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestCategory;