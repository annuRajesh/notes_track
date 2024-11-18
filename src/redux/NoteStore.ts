import {configureStore} from '@reduxjs/toolkit'
import noteReducer from '../features/NoteSlice'
export const store=configureStore({
    reducer:{
        notes:noteReducer
    }

})
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


