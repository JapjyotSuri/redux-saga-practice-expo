
import { configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import updateNameReducer from "../features/updateNameSlice";
import createSagaMiddleware from 'redux-saga'
import userSaga from '../sagas/userSaga'
import updateJokeReducer from '../features/updateJokeSlice'
import rootSaga from '../sagas/rootSaga'
//in the below line we are making a new redux saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store=configureStore({
    reducer: {
        user: updateNameReducer,
        joke: updateJokeReducer,

    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),sagaMiddleware]//adding sagaMiddleWare after the default middlewares
    
})

// sagaMiddleware.run(userSaga)
sagaMiddleware.run(rootSaga)//here root saga is made so that we can use both the sagas simultaneously
