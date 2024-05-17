import { createAsyncThunk } from "@reduxjs/toolkit";
import { wishlistCollectionRef } from "../FirebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteWishlistProductTC = createAsyncThunk(
    'webShop/deleteBasketProduct',
    async (id) => {
        try {
            console.log(id);
            const document = doc(wishlistCollectionRef, id);
            await deleteDoc(document);   
        } catch (error) {
            console.log(error);
        }
    }
)