import { createAsyncThunk } from '@reduxjs/toolkit'
import { basketCollectionRef } from '../FirebaseConfig'
import { addDoc } from 'firebase/firestore'

export const addBasketProduct = createAsyncThunk(
    'webShop/addBasketProduct',
    async ({product, newSize, newColor}) => {
        try {
            console.log(product, newSize, newColor);
            await addDoc(basketCollectionRef, {
                title: product.title,
                description: product.description,
                images: product.images[0],
                price: product.price,   
                size: newSize,
                color: newColor
            })
        } catch (err) {
            console.error(err);
        }
    }
)