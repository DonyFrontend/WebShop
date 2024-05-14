import {configureStore} from '@reduxjs/toolkit';
import getProductsSlice from '../Slices/getProductsSlice';
import { SignInTC } from '../Slices/SignInTC';
import { SignOutUserTC } from '../Slices/SignOutUserTC';
import { SignUpUserTC } from '../Slices/SignUpUserTC';
import { sortProductsTC } from '../Slices/getProductsSlice';

export const store = configureStore({
    reducer: {
        getProductsSlice,
        SignInTC,
        SignOutUserTC,
        SignUpUserTC,
        sortProductsTC
    }
})