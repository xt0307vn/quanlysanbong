import {createSlice} from '@reduxjs/toolkit'

const ManagerSlice = createSlice({
    name: "manager",
    initialState: {
        footballName: "",
        idWard: null,
        idDistrict: null,
        idProvince: null,
        addressDetail: "",
        description: "",
        pitches: []
    },
    reducers: {
        createNewFootballPich: (state, action) => {
            state.footballName = action.payload.footballName
            state.idWard = action.payload.idWard
            state.idDistrict = action.payload.idDistrict
            state.idProvince = action.payload.idProvince
            state.addressDetail = action.payload.addressDetail
            state.description = action.payload.description
        },
        createNewPitch: (state, action) => {
            state.pitches.push(action.payload)
        },
        deletePitch: (state, action) => {
            state.pitches.splice(action.payload, 1)
        }
    }
})

export const { createNewFootballPich, createNewPitch, deletePitch } = ManagerSlice.actions
export default ManagerSlice.reducer