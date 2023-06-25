import {createSlice} from '@reduxjs/toolkit'

const AccountSlice = createSlice({
    name: "account",
    initialState: {
        idAccount: null,
        typeAccount: "passersby"
    }, 
    reducers: {
        updateIdAccount: (state, action) => {
            state.idAccount = action.payload
        },
        updateTypeAccount: (state, action) => {
            state.typeAccount = action.payload
        }
    }
})

export const {updateIdAccount, updateTypeAccount} = AccountSlice.actions
export default AccountSlice.reducer