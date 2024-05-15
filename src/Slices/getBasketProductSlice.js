import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
import { basketCollectionRef } from "../FirebaseConfig";

export const basketProductsTC = createAsyncThunk(
    'webShop/getBasketProducts',
    async (props, {dispatch}) => {
        const productsData = await getDocs(basketCollectionRef);
        const data = productsData.docs.map(doc => ({
          id: doc.id,
          ...doc.data()  
        }))
        console.log(data);

        dispatch(setData(data));
    }
)

const basketSlice = createSlice({
    name: 'webShop/BasketSlice',
    initialState: {
        products: []
    },
    reducers: {
        setData(state, action) {
            state.products = action.payload;
        }
    }
})

export const {setData} = basketSlice.actions;
export default basketSlice.reducer;