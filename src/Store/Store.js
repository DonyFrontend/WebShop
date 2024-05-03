import {configureStore} from '@reduxjs/toolkit';
import getProductsSlice from '../Slices/getProductsSlice';

export const store = configureStore({
    reducer: {
        getProductsSlice,
    }
})