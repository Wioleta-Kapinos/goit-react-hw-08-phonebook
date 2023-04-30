import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "",
}

const filterSlice = createSlice ({
    name: "filter",
    initialState,
    reducers: {
        filterContact(state, action) {
            state.status = action.payload;
        }
    }
})

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilter = state => state.filter;