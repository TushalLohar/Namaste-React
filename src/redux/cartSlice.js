import { createSlice } from "@reduxjs/toolkit";

// Helper function to get data from LocalStorage safely
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart_items");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (err) {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // 1. Load the initial state from LocalStorage instead of an empty array
    items: loadCartFromStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      // 2. Save to LocalStorage
      localStorage.setItem("cart_items", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.card.info.id === action.payload.card.info.id);
      if (index > -1) {
        state.items.splice(index, 1);
        // 2. Update LocalStorage after removal
        localStorage.setItem("cart_items", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      // 3. Wipe LocalStorage on clear
      localStorage.removeItem("cart_items");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;