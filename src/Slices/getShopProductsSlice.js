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
        isFetch1: true,
        isFetch2: true,
        isFetch3: true,
        isFetch4: true,
        allProducts: [],
        shoes: [],
        shorts: [],
        socks: []
    },
    reducers: {
        setAllProducts(state, action) {
            state.allProducts = action.payload;
            state.isFetch1 = false;
        },
        setShoes(state, action) {
            state.shoes = action.payload;
            state.isFetch2 = false;
        },
        setShorts(state, action) {
            state.shorts = action.payload;
            state.isFetch3 = false;
        },
        setSocks(state, action) {
            state.socks = action.payload;
            state.isFetch4 = false;
        }
    }
})

export const {setShoes, setAllProducts, setShorts, setSocks} = getShopProductsSlice.actions;
export default getShopProductsSlice.reducer;