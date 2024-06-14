import { createAsyncThunk } from '@reduxjs/toolkit';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { auth, usersCollectionRef } from '../FirebaseConfig';

export const addChatTC = createAsyncThunk(
    'webShop/addChatTC',
    async ({message}) => {
        try {
            const newUser = doc(usersCollectionRef, auth.currentUser.uid);
            await updateDoc(newUser, {
                chat: arrayUnion(message),
                capital: true
            }, { merge: true },)
        } catch (err) {
            console.error(err);
        }
    }
)