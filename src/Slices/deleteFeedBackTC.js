import {createAsyncThunk} from '@reduxjs/toolkit';
import { deleteDoc, doc } from 'firebase/firestore';
import { feedBackCollectionRef } from '../FirebaseConfig';

export const DFeedBackTC = createAsyncThunk(
    'webShop/deleteFeedBackTC',
    async ({id}) => {
        console.log(id);
        try {
            const document = doc(feedBackCollectionRef, id);
            await deleteDoc(document);
        } catch (error) {
            console.log(error);
        }
    }
)