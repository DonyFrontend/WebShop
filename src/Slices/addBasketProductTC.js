import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth, usersCollectionRef } from '../FirebaseConfig'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'


export const addBasketProduct = createAsyncThunk(
    'webShop/addBasketProduct',
    async ({ product, newSize, newColor }) => {
        try {
            const newUser = doc(usersCollectionRef, auth.currentUser.uid);
            await updateDoc(newUser,  {
                basket: arrayUnion({
                    title: product.title,
                    description: product.description,
                    images: product.images[0],
                    price: product.price,
                    size: newSize,
                    color: newColor
                }),
                capital: true
            }, {merge: true}, )
        } catch (err) {
            console.error(err);
        }
    }
)