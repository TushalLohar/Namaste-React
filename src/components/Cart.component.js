import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList.component";
import { clearCart } from "../redux/cartSlice";
import CartShimmer from "./cart.shimmer"; // Import the shimmer

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulating a sexy loading state for 600ms
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <CartShimmer />;

  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-50 overflow-hidden">
        {/* Header Section */}
        <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-end bg-slate-50/50">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-slate-900">Checkout</h1>
            <p className="text-slate-500 font-medium mt-1">{cartItems.length} delicious items ready</p>
          </div>
          {cartItems.length > 0 && (
            <button
              className="mb-1 text-sm font-bold text-rose-500 hover:text-rose-600 transition-colors py-2 px-4 hover:bg-rose-50 rounded-full"
              onClick={() => dispatch(clearCart())}
            >
              Clear All
            </button>
          )}
        </div>

        {/* Content Section */}
        <div className="p-10">
          {cartItems.length === 0 ? (
            <div className="py-20 text-center space-y-6">
              <div className="text-6xl">🥘</div>
              <h2 className="text-2xl font-bold text-slate-800">Your cart is empty</h2>
              <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform">
                Start Exploring
              </button>
            </div>
          ) : (
            <>
              <ItemList items={cartItems} />
              <div className="mt-10 pt-8 border-t-2 border-dashed border-slate-100 flex justify-between items-center">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Total Amount</span>
                <span className="text-3xl font-black text-slate-900">
                  ₹{cartItems.reduce((acc, curr) => acc + (curr.card.info.price || curr.card.info.defaultPrice) / 100, 0)}
                </span>
              </div>
              <button className="w-full mt-8 py-5 bg-slate-900 text-white text-lg font-bold rounded-2xl shadow-2xl hover:bg-emerald-600 transition-colors active:scale-[0.98]">
                Proceed to Payment
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;