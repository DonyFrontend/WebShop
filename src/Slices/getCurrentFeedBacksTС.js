import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CurrentFeedbacksCollectionRef } from "../FirebaseConfig";
import { getDocs, onSnapshot, query } from "firebase/firestore";

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
        isFetch: true,
        feedBack: "Cool sait",
        date: "June 13, 2024 at 7:50:11 PM ",
        name: "John"
    },
    reducers: {
        setCurrentData(state, action) {
            state.currentFeedBacks = action.payload;
            state.isFetch = false;
        },

        setData(c) {
            
        }
    }
})

export const {setCurrentData} = currentFeedBacksSlice.actions;
export default currentFeedBacksSlice.reducer;

const c = query(CurrentFeedbacksCollectionRef)
onSnapshot (c, (snapshot) => {
    let newCurrentFeedBacks = [];
    snapshot.docs.forEach((doc) => {
        newCurrentFeedBacks.push({
            id: doc.id,
            ...doc.data()
        })

    });
})
