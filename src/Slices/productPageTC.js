import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc} from "firebase/firestore";
import { productsCollectionRef } from "../FirebaseConfig";

export const productTC = createAsyncThunk(
    'webShop/productData',
    async ({id}, {dispatch}) => {
        console.log('red',id); 
        dispatch(toggleFetch(true));
        const productData = doc(productsCollectionRef, id);
        const findDoc = await getDoc(productData);
        const data = findDoc.data();
        console.log('red',data);
        dispatch(setProductData(data));
        dispatch(toggleFetch(false))
    }
)

const productSlice = createSlice({
    name: 'webShop/productSlice',
    initialState: {
        product: [],
        isProductFetch: false
    },
    reducers: {
        setProductData(state, action) {
            state.product = action.payload;
            console.log(state.product, 'HI');
        }, 
        toggleFetch(state,action){ 
            state.isProductFetch = action.payload
        }
    }
})

export const {setProductData, toggleFetch} = productSlice.actions;
export default productSlice.reducer;