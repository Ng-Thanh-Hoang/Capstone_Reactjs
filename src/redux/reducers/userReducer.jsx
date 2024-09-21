import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userRegister: {
        "email": "",
        "password": "",
        "passwordComfirm":"",
        "name": "",
        "gender": true,
        "phone": "",
    }
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        handleChangeInputAction: (state, actions) => {
            const { id, value } = actions.payload;
            state.userRegister[id] = value;
        }
    }
});

export const { handleChangeInputAction } = userReducer.actions

export default userReducer.reducer