import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {value: { numberSlice: 5 } }

const initialState2 = {value: { handleLoadState: 0 }}

const userSlice = createSlice({
    name: "number",
    initialState: initialState,
    reducers: {
        loadMore: (state, action) => {
            state.value = action.payload;
        },
        resetState: (state) => {
            state.value = initialState.value;
        },
    }
})

const userSlice2 = createSlice({
    name: "handleLoad",
    initialState: initialState2,
    reducers: {
        loadHandle: (state, action) => {
            state.value = action.payload;
        },
        resetLoad: (state) => {
            state.value = initialState2.value;
        },
    }
})

export const { loadMore, resetState } = userSlice.actions;

export const { loadHandle, resetLoad } = userSlice2.actions;

export const store = configureStore({
    reducer: {
        number: userSlice.reducer,
        handleLoad: userSlice2.reducer,
    },
});
