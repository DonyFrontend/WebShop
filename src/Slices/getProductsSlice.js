import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsCollectionRef } from "../FirebaseConfig";
import { getDocs, onSnapshot, where } from "firebase/firestore";
import { query } from "firebase/firestore";

export const shopTC = createAsyncThunk(
    'webShop/products',
    async (props, { dispatch }) => {
        const productsData = await getDocs(productsCollectionRef);

        const data = productsData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        dispatch(setData(data))
    }
)

export const sortProductsTC = createAsyncThunk(
    'webshop/sortProducts',
    async (props, {dispatch}) => {
        const p = query(productsCollectionRef, where('categories', 'array-contains', props));
        onSnapshot(p, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setData(newProducts));            
        })
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        setData(state, action) {
            state.products = action.payload;
        }
    }
})

export const {setData} = productsSlice.actions;
export default productsSlice.reducer; 