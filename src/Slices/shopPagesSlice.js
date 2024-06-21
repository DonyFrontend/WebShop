import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onSnapshot, query, where } from "firebase/firestore";
import { productsCollectionRef } from "../FirebaseConfig";

export const shopPagesTC = createAsyncThunk(
    'webShop/shopPagesTC',
    async (props, {dispatch}) => {
        const shoes = query(productsCollectionRef, where('categories', 'array-contains', 'Shoe'));
        onSnapshot(shoes, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setShoe(newProducts));
        })
        const men = query(productsCollectionRef, where('categories', 'array-contains', 'Men'));
        onSnapshot(men, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setMen(newProducts));
        })
        const women = query(productsCollectionRef, where('categories', 'array-contains', 'Women'));
        onSnapshot(women, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setWomen(newProducts));
        })
    }
)

const shopPagesSlice = createSlice({
    name: 'webShop/shopPagesSlice',
    initialState: {
        men: [],
        women: [],
        shoe: []
    },
    reducers: {
        setMen(state, action) {
            state.men = action.payload;
        },
        setWomen(state, action) {
            state.women = action.payload;
        },
        setShoe(state, action) {
            state.shoe = action.payload;
        }
    }
})

export const {setMen, setShoe, setWomen} = shopPagesSlice.actions;
export default shopPagesSlice.reducer;