import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {value: { numberSlice: 5 } }

const userSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        loadMore: (state, action) => {
            state.value = action.payload;
        },
        resetState: (state) => {
            state.value = initialState.value;
        },
    }
})

export const { loadMore, resetState } = userSlice.actions;

export const store = configureStore({
    reducer: {
        number: userSlice.reducer,
    },
});
