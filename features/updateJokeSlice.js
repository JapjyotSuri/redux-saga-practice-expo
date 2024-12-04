import { createSlice } from "@reduxjs/toolkit";


const updateJokeSlice=createSlice({
    name: 'JokeReducer',
    initialState: {joke: ''},
    reducers: {
        jokeReducer: (state,action) => {

        },
        jokeSuccessReducer: (state,action) =>{
           state.joke=action.payload
        }
    }

})
export const {jokeReducer,jokeSuccessReducer}=updateJokeSlice.actions
export default updateJokeSlice.reducer