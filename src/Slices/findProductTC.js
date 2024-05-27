import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsCollectionRef } from "../FirebaseConfig";
import { getDocs } from "firebase/firestore";

export const findProductsTC = createAsyncThunk(
    'webShop/findProductTC',
    async ({title}, {dispatch}) => {
        const productsData = await getDocs(productsCollectionRef);
        const data = productsData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        const newData = data.filter((item) => item.title.toUpperCase().includes(title.toUpperCase()));
        console.log('newproduct', newData);
        dispatch(setData(newData));
    }
)

const findProductSlice = createSlice({
    name: 'webShop/findProduct',
    initialState: {
        products: []
    },
    reducers: {
        setData(state, action) {
            state.products = action.payload;
        }
    }
})

export const {setData} = findProductSlice.actions;
export default findProductSlice.reducer;