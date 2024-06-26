import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { productsCollectionRef } from "../FirebaseConfig";

export const changeProductTC = createAsyncThunk(
    'webshop/changeProductTC',
    async (product) => {
        try {
            const document = doc(productsCollectionRef, product.id);
            await updateDoc(document, product);
        } catch (error) {
            console.log(error);
        }

    }
)