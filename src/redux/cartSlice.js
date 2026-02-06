import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers:{
        addItem:(state , action)=>{
            state.items.push(action.payload);

        },
        removeitem:(state , action)=>{
            state.items.pop();

        },
        clearCart:(state)=>{               //to clear we dont need any action we can just clear
            state.items.length =0;
        }
    }
});


export const {addItem , removeitem , clearCart} = cartSlice.actions
export default cartSlice.reducer;
