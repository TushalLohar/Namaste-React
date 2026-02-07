import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { CDN_URL } from "./utils/constants.utils";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div
          key={`${item.card?.info?.id}-${index}`}
          className="group flex justify-between gap-8 p-6 mb-4 transition-all duration-500 border-b border-slate-100 hover:bg-slate-50/80 hover:rounded-3xl hover:shadow-xl hover:shadow-slate-200/40"
        >
          <div className="w-9/12 text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                {item.card.info.name}
              </h3>
              <p className="text-lg font-semibold text-slate-600">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 line-clamp-2 italic">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 relative group/img">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                alt={item.card.info.name}
              />
            </div>
            <button
              onClick={() => dispatch(addItem(item))}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-8 py-2 bg-white text-emerald-600 border border-emerald-100 font-black text-xs tracking-widest rounded-xl shadow-xl hover:bg-emerald-600 hover:text-white transition-all active:scale-90 hover:shadow-emerald-200"
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;