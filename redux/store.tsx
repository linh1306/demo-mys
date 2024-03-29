import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from './slice/UserSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    user:UserReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState >> = useSelector;