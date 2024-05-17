import { createAsyncThunk } from "@reduxjs/toolkit";
import { basketCollectionRef } from "../FirebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteBasketProductTC = createAsyncThunk(
    'webShop/deleteBasketProduct',
    async ({id}) => {
        try {
            const document = doc(basketCollectionRef, id);
            await deleteDoc(document);   
        } catch (error) {
            console.log(error);
        }
    }
)