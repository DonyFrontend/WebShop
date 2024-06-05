import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, usersCollectionRef } from "../FirebaseConfig";
import { doc, arrayRemove, updateDoc } from "firebase/firestore";

export const deleteBasketProductTC = createAsyncThunk(
    'webShop/deleteBasketProduct',
    async (product) => {
        try {
            const newUser = doc(usersCollectionRef, auth.currentUser.uid);
            await updateDoc(newUser, {
                basket: arrayRemove(product),
                capital: true
            }, { merge: true })
        } catch (error) {
            console.log(error);
        }
    }
)