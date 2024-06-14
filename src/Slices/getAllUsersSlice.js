import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs } from "firebase/firestore";
import { usersCollectionRef } from "../FirebaseConfig";

export const getAllUsersTC = createAsyncThunk(
    'wesShop/getAllUsersTC',
    async (props, {dispatch}) => {
        const data = await getDocs(usersCollectionRef);
        const newData = data.docs.map(doc => ({
            id: doc.id,
            ...doc.data()  
        }))
        dispatch(setData(newData));
    }
)

const AllUsersSlice = createSlice({
    name: 'webShop/getAllUsersSlice',
    initialState: {
        users: [],
        isFetch: true
    },
    reducers: {
        setData(state, action) {
            state.users = action.payload;
            state.isFetch = false;
            console.log('Hola!');
        }
    }
})

export const {setData} = AllUsersSlice.actions;
export default AllUsersSlice.reducer;