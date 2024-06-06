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
import { addWishlistProduct } from '../Slices/addWishlistProductTC';
import getWishlistProductSlice from '../Slices/getWishlistProductSlice';
import { deleteWishlistProductTC } from '../Slices/deleteWishlistProductTC';
import { newsProductsTC, mensProductsTC, womensProductsTC } from '../Slices/getProductsSlice';
import { findProductsTC } from '../Slices/findProductTC'; '../Slices/findProductTC';
import findProductTC from '../Slices/findProductTC';
import { getUserTC } from '../Slices/getThisUserTC';
import getThisUserTC from '../Slices/getThisUserTC';

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
        deleteBasketProductTC,
        addWishlistProduct,
        getWishlistProductSlice,
        deleteWishlistProductTC,
        newsProductsTC,
        mensProductsTC,
        womensProductsTC,
        findProductsTC,
        findProductTC,
        getUserTC,
        getThisUserTC,
    }
})