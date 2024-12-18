import { createReducer, createSlice } from "@reduxjs/toolkit"

const initialState={
    name: 'Japjyot',
    age: 20,
    error: null
}
const updateNameSlice=createSlice({
   name: 'userUpdater',
   initialState: initialState,
   reducers: {
    userReducer : (state,action) => {
        // state.name = action.payload.name
    },
    updateAgeReducer: (state,action) => {
        
    },
    updateAgeSuccess: (state,action) => {
        state.age = action.payload
    },
    updateNameSuccess: (state,action) => {
        state.name = action.payload
    },
    updateNameFailure: (state,action) => {
        state.error=action.payload;
    }
   }

})
export const {userReducer,updateNameSuccess,updateNameFailure,updateAgeReducer,updateAgeSuccess}=updateNameSlice.actions
export default updateNameSlice.reducer