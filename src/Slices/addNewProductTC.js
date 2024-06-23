import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";
import { productsCollectionRef } from "../FirebaseConfig";

export const addNewProductTC = createAsyncThunk(
    'webShop/addNewProductTC',
    async (product) => {
        console.log(product);
        try {
            addDoc(productsCollectionRef, product);
        } catch (error) {
            console.log(error);
        }
    }
)