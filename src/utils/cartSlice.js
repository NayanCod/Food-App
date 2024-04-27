import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state over here
            state.items.push(action.payload);
        },
        DELETE_ITEM: (state, action) => {
            state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id);
            console.log(action);
        },
        clearCart: (state, action) => {
            state.items.length = 0; // []
        },
    }
});

export const {addItem, removeItem, clearCart, DELETE_ITEM} = cartSlice.actions;
export default cartSlice.reducer;