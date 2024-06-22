import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc } from "firebase/firestore";
import { productsCollectionRef } from "../FirebaseConfig";

export const deleteProductTC = createAsyncThunk(
    'webShop/deleteProductTC',
    async (id) => {
        try {
            const document = doc(productsCollectionRef, id);
            await deleteDoc(document);
        } catch (error) {
            console.log(error);
        }

    }
)