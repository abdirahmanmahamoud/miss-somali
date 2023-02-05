import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './features/modal/modalSlice';
import competitorsSlice from './features/competitors/competitorsSlice';
 
export const Store = configureStore({
    reducer : {
        modal : modalSlice,
        competitor : competitorsSlice
    }
})