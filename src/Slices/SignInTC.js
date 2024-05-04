import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import {createAsyncThunk} from '@reduxjs/toolkit';

export const SignInTC = createAsyncThunk(
    'webShop/SignIn',
    async ({email, password}) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user);
        }   catch(err) {
            console.log(err);
        }
    }
)