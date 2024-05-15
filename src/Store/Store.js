import {configureStore} from '@reduxjs/toolkit';
import getProductsSlice from '../Slices/getProductsSlice';
import { SignInTC } from '../Slices/SignInTC';
import { SignOutUserTC } from '../Slices/SignOutUserTC';
import { SignUpUserTC } from '../Slices/SignUpUserTC';
import { sortProductsTC } from '../Slices/getProductsSlice';
import productPageTC from '../Slices/productPageTC';
import { addBasketProduct } from '../Slices/addBasketProductTC';
import getBasketProductSlice from '../Slices/getBasketProductSlice';
import { deleteBasketProductTC } from '../Slices/deleteBasketProductTC';

export const store = configureStore({
    reducer: {
        getProductsSlice,
        SignInTC,
        SignOutUserTC,
        SignUpUserTC,
        sortProductsTC,
        productPageTC,
        addBasketProduct,
        getBasketProductSlice,
        deleteBasketProductTC
    }
})