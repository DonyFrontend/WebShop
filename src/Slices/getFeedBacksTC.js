import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { feedBackCollectionRef } from "../FirebaseConfig";
import { getDocs } from "firebase/firestore";

export const getFeedBacks = createAsyncThunk(
    'webshop/FeedBackTC',
    async (props, {dispatch}) => {
        const data = await getDocs(feedBackCollectionRef);
        const newData = data.docs.map(doc => ({
            id: doc.id,
            ...doc.data()    
        }))

        dispatch(setData(newData));
    }
)

const FeedBackSlice = createSlice({
    name: 'webShop/FeedBackSlice',
    initialState: {
        feedBacks: [],
        isFetch: true
    },
    reducers: {
        setData(state, action) {
            state.feedBacks = action.payload;
            state.isFetch = false;
        }
    }
})

export const {setData} = FeedBackSlice.actions;
export default FeedBackSlice.reducer;