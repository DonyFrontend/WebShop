import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CurrentFeedbacksCollectionRef } from "../FirebaseConfig";
import { getDocs } from "firebase/firestore";

export const AllCurrentFeedbacksTC = createAsyncThunk(
    'webshop/CurrentFeedbacks',
    async (props, { dispatch }) => {
        try {
            const CurrentFeedbacksData = await getDocs(CurrentFeedbacksCollectionRef);

        const data = CurrentFeedbacksData.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        dispatch(setCurrentData(data));
        console.log(data);
    
        } catch (error) {
         console.log(error);   
        }
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
});

export const { setCurrentData } = currentFeedBacksSlice.actions;
export default currentFeedBacksSlice.reducer;