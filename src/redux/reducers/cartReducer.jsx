import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [
    ]
}

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addProductAction: (state, action) => {
            const { type, payload } = action;
            const itemCart = state.cart.find(item => item.id == payload.id);
            if (itemCart) {
                itemCart.quantity += 1;
            }
            else {
                state.cart.push(payload);
            }
        },
        deleteProductAction: (state, action) => {
            const { payload } = action;
            state.cart = state.cart.filter(item => item.id !== payload);
        },
        changeQuantityProductAction: (state, action) => {
            const { payload } = action;
            let itemCart = state.cart.find(item => item.id === payload.id);
            if (itemCart) {
                itemCart.quantity += payload.quantity;
            }
        }
    }
});

export const { addProductAction,deleteProductAction,changeQuantityProductAction } = cartReducer.actions

export default cartReducer.reducer