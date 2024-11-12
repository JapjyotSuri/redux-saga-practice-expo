
import { configureStore , getDefaultMiddleware} from "@reduxjs/toolkit";
import updateNameReducer from "../features/updateNameSlice";
import createSagaMiddleware from 'redux-saga'
import userSaga from '../sagas/userSaga'
//in the below line we are making a new redux saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store=configureStore({
    reducer: {
        user: updateNameReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(),sagaMiddleware]//adding sagaMiddleWare after the default middlewares
    
})

sagaMiddleware.run(userSaga)
