import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsCollectionRef } from "../FirebaseConfig";
import { getDocs, limit, onSnapshot, where } from "firebase/firestore";
import { query } from "firebase/firestore";
import { scrollToZero } from "../pages/utils/CustomFC";

export const shopTC = createAsyncThunk(
    'webShop/products',
    async (props, { dispatch }) => {
        const productsData = await getDocs(productsCollectionRef);

        const data = productsData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        dispatch(setData(data))
    }
)

export const mensProductsTC = createAsyncThunk(
    'webShoop/menProducts',
    async (props, { dispatch }) => {
        const p = query(productsCollectionRef, where('categories', 'array-contains', 'Men'), limit(8));
        onSnapshot(p, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setMenData(newProducts));
        })
    }
)
export const womensProductsTC = createAsyncThunk(
    'webShoop/menProducts',
    async (props, { dispatch }) => {
        const p = query(productsCollectionRef, where('categories', 'array-contains', 'Women'), limit(8));
        onSnapshot(p, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setWomenData(newProducts));
        })
    }
)
export const newsProductsTC = createAsyncThunk(
    'webShop/menProducts',
    async (props, { dispatch }) => {
        const productsData = query(productsCollectionRef, limit(4));

        onSnapshot(productsData, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setNewData(newProducts));
        })
    }
)

export const sortProductsTC = createAsyncThunk(
    'webshop/sortProducts',
    async ({ category, data }, { dispatch }) => {
        scrollToZero();
        const p = query(productsCollectionRef, where(category, 'array-contains', data));
        onSnapshot(p, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            dispatch(setData(newProducts));
        })
    }
)

export const sortProductsFromGenderTC = createAsyncThunk(
    'webShop/sortProductsFromGenderTC',
    async ({ data, products }, { dispatch }) => {
        scrollToZero();
        console.log(products);
        const newProducts = products.filter(item => item.categories.find(item => item === data));
        if (newProducts[0] === undefined) {
            dispatch(setSavesData([undefined]));
        } else {
            dispatch(setSavesData(newProducts));
        }
    }
)

export const allGenderTC = createAsyncThunk(
    'webShop/allGenderTC',
    async (products, {dispatch}) => {
        scrollToZero();
        dispatch(setSavesData(products));
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        saveProducts: [],
        men: [],
        women: [],
        new: []
    },
    reducers: {
        setData(state, action) {
            state.products = action.payload;
            state.saveProducts = action.payload;
        },
        setMenData(state, action) {
            state.men = action.payload;
        },
        setWomenData(state, action) {
            state.women = action.payload;
        },
        setNewData(state, action) {
            state.new = action.payload;
        },
        setSavesData(state, action) {
            state.products = action.payload;
        }
    }
})

export const { setData, setMenData, setNewData, setWomenData, setSavesData } = productsSlice.actions;
export default productsSlice.reducer;