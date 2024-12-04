import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { updateAgeReducer, updateAgeSuccess, updateNameFailure, updateNameSuccess, userReducer } from '../features/updateNameSlice';

const getUserName=async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json();
      return data[Math.floor(Math.random()*11)].name
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  try {
     const userName= yield call(getUserName);//we write call here to handle asynchronous function  calls
     yield put(updateNameSuccess(userName))//put is used to dispatch something to the reducer.It can be thought of as an alternative to useDispatch hook to dispatch in saga
  } catch (e) {
    yield put(updateNameFailure(e.message))
  }
}

function* fetchAge(){
    const age=Math.floor(Math.random()*100)+1
    yield put(updateAgeSuccess(age))
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
//the below is a generator function
function* userSaga() {//this is a watcher
  yield takeLatest(userReducer.type, fetchUser)//till the time this line is not executed yield pauses the execution of this function
  //In the above line we write userreducer.type refers to the action type defined in our Redux slice.
//   In Redux Toolkit, createSlice automatically generates an action type string for each reducer.
  //The above code keeps on listnening whenever the USER_FETCH_REQUESTED is called the fetchUser functions gets triggered and runs

  yield takeEvery(updateAgeReducer.type,fetchAge)


}
export default userSaga;