import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import {createAsyncThunk} from '@reduxjs/toolkit';
import { useNavigate } from "react-router-dom";

export const SignInTC = createAsyncThunk(
    'webShop/SignIn',
    async ({email, password}) => {
        try {
            console.log(email, password);
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user);
            const navigate = useNavigate()
            navigate("/profile/user")
        }   catch(err) {
            localStorage.setItem('error', 'true');
        }
    }
)