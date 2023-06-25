import { createSlice } from "@reduxjs/toolkit";

const PageSlice = createSlice({
    name: 'page',
    initialState: {
        previousPage: "",
        currentPage: ""
    },
    reducers: {
        updatePreviousPage: (state, action) => {
            state.previousPage = action.payload
        },
        updateCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
})

export default PageSlice.reducer
export const {updateCurrentPage, updatePreviousPage} = PageSlice.actions