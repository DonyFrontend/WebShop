import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const SignInTC = createAsyncThunk(
    'webShop/SignIn',
    async ({ email, password, navigate, showToast }) => {
        console.log(email, password);
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => navigate('/profile/user'))
            .catch(() => showToast("We cannot find your account! Please try 'Continue with Google'"))
    }
)