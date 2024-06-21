import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, onSnapshot, query, where } from "firebase/firestore";
import { productsCollectionRef } from "../FirebaseConfig";

export const getShopProductsTC = createAsyncThunk(
    'webShop/getShopProductsTC',
    async (props, {dispatch}) => {
        const productsData = await getDocs(productsCollectionRef);

        const data = productsData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        dispatch(setAllProducts(data))
        
        const shoes = query(productsCollectionRef, where('categories', 'array-contains', 'Shoe'));
        onSnapshot(shoes, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setShoes(newProducts));
        })
        const shorts = query(productsCollectionRef, where('categories', 'array-contains', 'Shorts'));
        onSnapshot(shorts, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setShorts(newProducts));
        })
        const socks = query(productsCollectionRef, where('categories', 'array-contains', 'Socks'));
        onSnapshot(socks, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setSocks(newProducts));
        })
    }
)

const getShopProductsSlice = createSlice({
    name: 'webShop/getShopProductsSlice',
    initialState: {
        allProducts: [],
        shoes: [],
        shorts: [],
        socks: []
    },
    reducers: {
        setAllProducts(state, action) {
            state.allProducts = action.payload;
        },
        setShoes(state, action) {
            state.shoes = action.payload;
        },
        setShorts(state, action) {
            state.shorts = action.payload;
        },
        setSocks(state, action) {
            state.socks = action.payload;
        }
    }
})

export const {setShoes, setAllProducts, setShorts, setSocks} = getShopProductsSlice.actions;
export default getShopProductsSlice.reducer;