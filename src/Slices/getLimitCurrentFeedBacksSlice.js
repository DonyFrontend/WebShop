import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { limit, onSnapshot, query } from "firebase/firestore";
import { CurrentFeedbacksCollectionRef } from "../FirebaseConfig";

export const getLimitCurrentFeedBacksTC = createAsyncThunk(
    'webShop/getLimitCurrentFeedBacksTC',
    async (props, { dispatch }) => {
        const p = query(CurrentFeedbacksCollectionRef, limit(3));
        onSnapshot(p, (snapshot) => {
            let feedBacks = [];
            snapshot.docs.forEach((doc) => {
                feedBacks.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(setData(feedBacks));
        })
    }
)

const limitCurrentProductsSlice = createSlice({
    name: 'webShop/limitCurrentProductsSlice',
    initialState: {
        limitFeedBacks: [],
        isFetch: true
    },
    reducers: {
        setData(state, action) {
            state.limitFeedBacks = action.payload;
            state.isFetch = false;
        }
    }
})

export const {setData} = limitCurrentProductsSlice.actions;
export default limitCurrentProductsSlice.reducer;