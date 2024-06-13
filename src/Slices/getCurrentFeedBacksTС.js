import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CurrentFeedbacksCollectionRef } from "../FirebaseConfig";
import { getDocs } from "firebase/firestore";

export const CurrentFeedbacksTC = createAsyncThunk(
    'webshop/CurrentFeedbacks',
    async (props, { dispatch }) => {
        const CurrentFeedbacksData = await getDocs(CurrentFeedbacksCollectionRef);

        const data = CurrentFeedbacksData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        dispatch(setCurrentData(data));
    }
);

const currentFeedBacksSlice = createSlice({
    name: 'webShop/currentFeedBacks',
    initialState: {
        currentFeedBacks: [],
        isFetch: true
    },
    reducers: {
        setCurrentData(state, action) {
            state.currentFeedBacks = action.payload;
            state.isFetch = false;
        }
    }
})

export const {setCurrentData} = currentFeedBacksSlice.actions;
export default currentFeedBacksSlice.reducer;