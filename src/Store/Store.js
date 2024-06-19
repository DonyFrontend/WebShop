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
import { similarProductsTC } from '../Slices/similarProductsSlice';
import similarProductsSlice from '../Slices/similarProductsSlice';
import { FeedBackTC } from '../Slices/sendFeedBackTC';
import getFeedBacksTC from '../Slices/getFeedBacksTC';
import { getFeedBacks } from '../Slices/getFeedBacksTC';
import { DFeedBackTC } from '../Slices/deleteFeedBackTC';
import { CurrentFeedbacksTC } from '../Slices/getCurrentFeedBacksTС';
import getCurrentFeedBacksTС from '../Slices/getCurrentFeedBacksTС';
import { addCurrentFeedBackTC } from '../Slices/addCurrentFeedBackTC';
import { addChatTC } from '../Slices/addChatTC';
import getAllUsersSlice from '../Slices/getAllUsersSlice';
import { getAllUsersTC } from '../Slices/getAllUsersSlice';
import getLimitCurrentFeedBacksSlice from '../Slices/getLimitCurrentFeedBacksSlice';
import { getLimitCurrentFeedBacksTC } from '../Slices/getLimitCurrentFeedBacksSlice';
import { deleteChatTC } from '../Slices/deleteChatTC';
import findUserSlice from '../Slices/findUserSlice';
import { findUserTC } from '../Slices/findUserSlice';
import { addAdminMessageTC } from '../Slices/addAdminMessageTC';
import { changeUserDataTC } from '../Slices/changeUserDataTC';
import { AllCurrentFeedbacksTC } from '../Slices/AllFeedBacksTC';
import AllFeedBacksTC from '../Slices/AllFeedBacksTC';
import getShopProductsSlice from '../Slices/getShopProductsSlice';
import { getShopProductsTC } from '../Slices/getShopProductsSlice';
import { addOrderProductsTC } from '../Slices/addOrderProductsTC';

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
        similarProductsSlice,
        similarProductsTC,
        FeedBackTC,
        getFeedBacks,
        getFeedBacksTC,
        DFeedBackTC,
        CurrentFeedbacksTC,
        getCurrentFeedBacksTС,
        addCurrentFeedBackTC,
        addChatTC,
        getAllUsersSlice,
        getAllUsersTC,
        getLimitCurrentFeedBacksSlice,
        getLimitCurrentFeedBacksTC,
        deleteChatTC,
        findUserSlice,
        findUserTC,
        addAdminMessageTC,
        changeUserDataTC,
        AllFeedBacksTC,
        AllCurrentFeedbacksTC,
        getShopProductsSlice,
        getShopProductsTC,
        addOrderProductsTC,
    }
})