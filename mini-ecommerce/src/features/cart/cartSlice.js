// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // { id, title, price, image, quantity }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload; // { id, title, price, image }
            const existing = state.items.find(i => i.id === newItem.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        // ✅ TODO 3: ลบทั้งรายการตาม id
        removeItem(state, action) {
            const id = action.payload; // productId
            state.items = state.items.filter(i => i.id !== id);
        },
        // ✅ TODO 4: อัปเดตจำนวน (<=0 ให้ลบทิ้ง)
        updateQuantity(state, action) {
            const { id, quantity } = action.payload; // { id, quantity }
            const item = state.items.find(i => i.id === id);
            if (!item) return;
            if (quantity <= 0) {
                state.items = state.items.filter(i => i.id !== id);
            } else {
                item.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
