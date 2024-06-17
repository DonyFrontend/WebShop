import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersCollectionRef } from "../FirebaseConfig";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const addAdminMessageTC = createAsyncThunk(
    'webShop/addAdminMessageTC',
    async ({id, message}) => {
        try {
            const newUser = doc(usersCollectionRef, id);
            await updateDoc(newUser, {
                chat: arrayUnion({
                    name: 'Admin',
                    message
                }),
                capital: true
            }, { merge: true },)
        } catch (err) {
            console.error(err);
        }
    }
)