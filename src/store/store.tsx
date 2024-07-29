import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import sideBarController from './sidebar'




const rootReducer = combineReducers({
    sideBarController: sideBarController,
})


export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
