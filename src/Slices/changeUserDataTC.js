import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, usersCollectionRef } from "../FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const changeUserDataTC = createAsyncThunk(
    'webShop/changeUserData',
    async ({name, town}) => {
        try {
            const newUser = doc(usersCollectionRef, auth.currentUser.uid);
            await updateDoc(newUser, {
                name,
                town,
                capital: true
            }, { merge: true },)
        } catch (err) {
            console.error(err);
        }
    }
)