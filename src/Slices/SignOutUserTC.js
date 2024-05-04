import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../FirebaseConfig";
import { signOut } from "firebase/auth";

export const SignOutUserTC = createAsyncThunk(
    'webShop/signOutUserTC',
    async () => {
        await signOut(auth);
        console.log(auth);
    }
)