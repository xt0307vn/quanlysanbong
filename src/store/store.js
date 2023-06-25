import { configureStore } from "@reduxjs/toolkit"
import Slices from "./slices"

const store = configureStore({
    reducer: {
        manager: Slices.ManagerSlice,
        account: Slices.AccountSlice,
        page: Slices.PageSlice
    }
})

export default store