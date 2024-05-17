import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
import { wishlistCollectionRef } from "../FirebaseConfig";

export const wishlistProductsTC = createAsyncThunk(
    'webShop/getBasketProducts',
    async (props, {dispatch}) => {
        const productsData = await getDocs(wishlistCollectionRef);
        const data = productsData.docs.map(doc => ({
          id: doc.id,
          ...doc.data()  
        }))
        console.log(data);

        dispatch(setData(data));
    }
)

const wishlistSlice = createSlice({
    name: 'webShop/WishlistSlice',
    initialState: {
        products: []
    },
    reducers: {
        setData(state, action) {
            console.log('HI');
            state.products = action.payload;
        }
    }
})

export const {setData} = wishlistSlice.actions;
export default wishlistSlice.reducer;