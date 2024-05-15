import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc} from "firebase/firestore";
import { productsCollectionRef } from "../FirebaseConfig";

export const productTC = createAsyncThunk(
    'webShop/productData',
    async ({id}, {dispatch}) => {
        console.log(id);
        const productData = doc(productsCollectionRef, id);
        const findDoc = await getDoc(productData);
        const data = findDoc.data();
        console.log(data);
        dispatch(setProductData(data));
    }
)

const productSlice = createSlice({
    name: 'webShop/productSlice',
    initialState: {
        product: [{
            title: null,
            colors: null,
            images: null,
            description: null,
            price: null,
            sizes: null,
            categories: null
        }]
    },
    reducers: {
        setProductData(state, action) {
            state.product = action.payload;
            console.log(state.product, 'HI');
        }
    }
})

export const {setProductData} = productSlice.actions;
export default productSlice.reducer;