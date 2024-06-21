import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";
import { ordersCollectionRef } from "../FirebaseConfig";

export const addNewProductTC = createAsyncThunk(
    'webShop/addNewProductTC',
    async ({product}) => {
        console.log(product);
        try {
            addDoc(ordersCollectionRef, product);
        } catch (error) {
            console.log(error);
        }
    }
)