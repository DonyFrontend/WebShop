import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";
import { CurrentFeedbacksCollectionRef } from "../FirebaseConfig";

export const addCurrentFeedBackTC = createAsyncThunk(
    'webShop/addCurrentFeedBackTC',
    async (doc) => {
        await addDoc(CurrentFeedbacksCollectionRef, {
            date: doc.date,
            feedBack: doc.feedBack,
            name: doc.name
        })
    }
)