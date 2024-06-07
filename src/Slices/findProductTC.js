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
        dispatch(setFetch());
    }
)

const findProductSlice = createSlice({
    name: 'webShop/findProduct',
    initialState: {
        products: [],
        isFetch: false
    },
    reducers: {
        setData(state, action) {
            state.products = action.payload;
        },
        setFetch(state) {
            state.isFetch = true;
        }
    }
})

export const {setData, setFetch} = findProductSlice.actions;
export default findProductSlice.reducer;