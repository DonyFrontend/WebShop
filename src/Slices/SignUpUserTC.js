import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignUpUserTC = createAsyncThunk(
    'weShop/SignUpUserTC',
    async ({email, password}) => {
        await  signInWithEmailAndPassword(auth, email, password);
        
    }
)