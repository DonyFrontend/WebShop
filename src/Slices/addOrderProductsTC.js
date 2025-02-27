import { createAsyncThunk } from "@reduxjs/toolkit";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { auth, usersCollectionRef } from "../FirebaseConfig";

export const addOrderProductsTC = createAsyncThunk(
    'webShop/addOrderProductsTC',
    async ({ allProducts, navigate, price }) => {
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
        const number = Date.now();

        const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
        const date = `${new Date().getDate()} ${allMonths[month]} ${new Date().getFullYear()} Year at ${time}`;
        
        try {
            allProducts.forEach(item => {
                const newUser = doc(usersCollectionRef, auth.currentUser.uid);
                const FC = async () => {
                    await updateDoc(newUser, {
                        order: arrayUnion({
                            title: item.title,
                            description: item.description,
                            images: item.images,
                            price,
                            size: item.size,
                            color: item.color,
                            date,
                            number,
                        }),
                        basket: [],
                        capital: true
                    }, { merge: true })
                }
                FC();
                navigate('/orderpage');
            });

        } catch (err) {
            console.error(err);
        }
    }
)