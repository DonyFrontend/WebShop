import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { usersCollectionRef } from "../FirebaseConfig";
import { setDoc, doc } from "firebase/firestore";


export const SignUpUserTC = createAsyncThunk(
    'weShop/SignUpUserTC',
    async ({ email, password, name, town, navigate }) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async data => {
                const newUser = doc(usersCollectionRef, data.user.uid);
                await setDoc(newUser, {
                    id: data.user.uid,
                    name,
                    email,
                    password,
                    town,
                    isAdmin: false,
                    wishlist: [],
                    basket: [],
                    chat: [],
                    order: [],
                    coupons: [
                        'ItAcademy',
                        'Nike400',
                        'Jordan2024'
                    ]
                })
                    .then(() => navigate('/profile/user'))
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err))
    }
)