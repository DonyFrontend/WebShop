import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsCollectionRef } from "../FirebaseConfig";
import { doc, getDoc, limit, onSnapshot, query, where } from "firebase/firestore";

export const similarProductsTC = createAsyncThunk(
    'webShop/similarProductsTC',
    async ({id}, {dispatch}) => {
        const productData = doc(productsCollectionRef, id);
        const findDoc = await getDoc(productData);
        const data = findDoc.data();    
        // const productsData = await getDocs(productsCollectionRef);
        // const newProductsData = productsData.docs.map(doc => ({
        //     id: doc.id,
        //     ...doc.data()
        // }))
        
        // const newData = newProductsData.filter(item => (item.categories[0] & item.categories[1]) == (data.categories[0] & data.categories[1]) )
        const newData = query(productsCollectionRef, where('categories', 'array-contains', data.categories[0] && data.categories[1]), limit(8));
        console.log('new', newData);
        onSnapshot(newData, (snapshot) => {
            let newProducts = [];
            snapshot.docs.forEach((doc) => {
                newProducts.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            console.log('new', newProducts);
            dispatch(setData(newProducts));            
        })        
    }
)

const similarProductsSlice = createSlice({
    name: 'webShop/similarProductsSlice',
    initialState: {
        products: [],
        isFetch: true
    },
    reducers: {
        setData(state, action) {
            state.products = action.payload;
            state.isFetch = false;
            console.log('state:' ,state.products);
        } 
    }
})

export const {setData} = similarProductsSlice.actions;
export default similarProductsSlice.reducer;