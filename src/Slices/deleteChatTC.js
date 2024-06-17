import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersCollectionRef } from "../FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const deleteChatTC = createAsyncThunk(
    'webShop/deleteChatTC',
    async (id) => {
        try {
            const newData2 = doc(usersCollectionRef, id);
            console.log(newData2);
            await updateDoc(newData2, {
                chat: []
            })
        } catch (error) {
            console.log(error);
        }
    }
)