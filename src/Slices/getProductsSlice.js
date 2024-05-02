import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsCollectionRef } from "../FirebaseConfig";
import { getDocs } from "firebase/firestore";

export const shopTC = createAsyncThunk(
    'webShop/products',
    async (props, {dispatch}) => {
        const productsData = await getDocs(productsCollectionRef);
        const data = productsData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        dispatch(setData(data))
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        setData(state, action) {
            console.log(state);
            state.products = action.payload;
        }
    }
})

export const {setData} = productsSlice.actions;
export default productsSlice.reducer; 