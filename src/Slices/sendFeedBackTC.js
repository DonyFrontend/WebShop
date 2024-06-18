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
        
        const allMonths = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]

        const month = new Date().getMonth();
        console.log(month);

        const date = `${new Date().getDate()} ${allMonths[month]} ${new Date().getFullYear()} Year.`;
        const date = `${new Date().getDate()} ${allMonths[month]} ${new Date().getFullYear()} Year.`;


        addDoc(feedBackCollectionRef, {
            name: newData2.name,
            feedBack: message,
            date
        })
    }    
)