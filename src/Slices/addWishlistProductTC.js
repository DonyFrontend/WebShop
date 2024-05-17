import { createAsyncThunk } from '@reduxjs/toolkit'
import { wishlistCollectionRef } from '../FirebaseConfig'
import { addDoc } from 'firebase/firestore'

export const addWishlistProduct = createAsyncThunk(
    'webShop/addBasketProduct',
    async ({product, newSize, newColor}) => {
        try {
            console.log(product, newSize, newColor);
            await addDoc(wishlistCollectionRef, {
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