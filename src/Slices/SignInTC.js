import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import {createAsyncThunk} from '@reduxjs/toolkit';

export const SignInTC = createAsyncThunk(
    'webShop/SignIn',
    async ({email, password}) => {
        try {
            console.log(email, password);
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user);
        }   catch(err) {
            console.log(err);
        }
    }
)