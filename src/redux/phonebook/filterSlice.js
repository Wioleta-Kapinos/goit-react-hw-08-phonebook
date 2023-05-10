import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "",
}

export const filterSlice = createSlice ({
    name: "filter",
    initialState,
    reducers: {
        filterContact(state, action) {
            state.status = action.payload;
        }
    }
})

export const { filterContact } = filterSlice.actions;
export const selectFilter = state => state.filter;
export default filterSlice.reducer;