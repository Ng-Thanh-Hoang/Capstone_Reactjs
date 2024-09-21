import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || []
}

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addProductAction: (state, action) => {
            const { payload } = action;
            const itemCart = state.cart.find(item => item.id === payload.id);
            if (itemCart) {
                itemCart.quantity += 1;
            } else {
                state.cart.push({ ...payload, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        deleteProductAction: (state, action) => {
            const { payload } = action;
            state.cart = state.cart.filter(item => item.id !== payload);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        changeQuantityProductAction: (state, action) => {
            const { payload } = action;
            const itemCart = state.cart.find(item => item.id === payload.id);
            if (itemCart && itemCart.quantity + payload.quantity > 0) {
                itemCart.quantity += payload.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
});

export const { addProductAction, deleteProductAction, changeQuantityProductAction } = cartReducer.actions;

export default cartReducer.reducer
