import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, feedBackCollectionRef, usersCollectionRef } from "../FirebaseConfig";
import { addDoc, getDocs } from "firebase/firestore";

export const FeedBackTC = createAsyncThunk(
    'webShop/FeedBackTC',
    async ({message}) => {
        const data = await getDocs(usersCollectionRef);
        const newdata = data.docs.map(doc => ({
            ...doc.data()
        }))
        const newData2 = newdata.find(item => item.id == auth.currentUser.uid);

        addDoc(feedBackCollectionRef, {
            name: newData2.name,
            feedBack: message 
        })
    }    
)