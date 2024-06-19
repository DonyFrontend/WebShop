import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { usersCollectionRef } from "../FirebaseConfig";
import { setDoc, doc } from "firebase/firestore";


export const SignUpUserTC = createAsyncThunk(
    'weShop/SignUpUserTC',
    async ({email, password, name, town}) => {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = doc(usersCollectionRef, user.user.uid);
        await setDoc(newUser, {
            id: user.user.uid,
            name,
            email,
            password,
            town,
            isAdmin: false,
            wishlist: [],
            basket: [],
            chat: [],
            order: []
        })
    }
)