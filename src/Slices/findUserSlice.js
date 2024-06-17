import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { usersCollectionRef } from "../FirebaseConfig";

export const findUserTC = createAsyncThunk(
    'webShop/findUserTC',
    async (id, {dispatch}) => {
        try {
            const user = doc(usersCollectionRef, id);
            const newUser = await getDoc(user);
            const getUser = newUser.data();
            dispatch(setData(getUser));
        } catch (error) {
            console.log(error);
        }

    }
)

const findUserSlice = createSlice({
    name: 'webShop/findUserSlice',
    initialState: {
        user: [],
        isFetch: true
    },
    reducers: {
        setData(state, action) {
            state.user = action.payload;
            state.isFetch = false;
        }
    }
})

export const {setData} = findUserSlice.actions;
export default findUserSlice.reducer;