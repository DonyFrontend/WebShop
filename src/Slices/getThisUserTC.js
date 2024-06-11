import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { usersCollectionRef } from "../FirebaseConfig";
import { getDocs } from "firebase/firestore";
import { auth } from "../FirebaseConfig";

export const getUserTC = createAsyncThunk(
    'webShop/getUserTC',
    async (props, { dispatch }) => {
        const data = await getDocs(usersCollectionRef);
        const newdata = data.docs.map(doc => ({
            ...doc.data()
        }))
        const newData2 = newdata.find(item => item.id == auth.currentUser.uid);
        dispatch(setUser(newData2));
    }
)

const userSLice = createSlice({
    name: 'webshop/userSlice',
    initialState: {
        user: [],
        isFetch: true
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isFetch = false;
            console.log('payload', action.payload);
        }
    }
})
export const { setUser } = userSLice.actions;
export default userSLice.reducer;