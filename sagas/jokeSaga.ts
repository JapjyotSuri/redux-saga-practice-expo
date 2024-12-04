import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { updateAgeReducer, updateAgeSuccess, updateNameFailure, updateNameSuccess, userReducer } from '../features/updateNameSlice';
import { jokeReducer, jokeSuccessReducer } from '../features/updateJokeSlice';


async function getJoke(){
    //remember we can only use yeild inside a generator function
    const res=await fetch('https://api.chucknorris.io/jokes/random');
    const data=await res.json();
   return data.value
}

function* fetchJoke(){
    const joke: string=yield call(getJoke)
    yield put(jokeSuccessReducer(joke))
   
}


function* jokeSaga() {//this is a watcher

  yield takeLatest(jokeReducer.type, fetchJoke)//till the time this line is not executed yield pauses the execution of this function
  //In the above line we write userreducer.type refers to the action type defined in our Redux slice.
//   In Redux Toolkit, createSlice automatically generates an action type string for each reducer.
  //The above code keeps on listnening whenever the USER_FETCH_REQUESTED is called the fetchUser functions gets triggered and runs


}
export default jokeSaga;
