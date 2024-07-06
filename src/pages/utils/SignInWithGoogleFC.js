import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, usersCollectionRef } from "../../FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

function signInWithGoogle(props) {
    signInWithPopup(auth, googleProvider)
        .then(() => props.navigate('/profile/user'))
        .catch(err => console.error(err));
}
export function signUpWithGoogle(props) {
    console.log(props);
    const name = String(Date.now());
    const userName = 'user' + name.slice(10, 13);

    signInWithPopup(auth, googleProvider)
    .then(async data => {
        const newUser = doc(usersCollectionRef, data.user.uid);
        await setDoc(newUser, {
            id: data.user.uid,
            name: userName,
            email: data.user.email,
            password: data.user.providerData[0].uid,
            town: 'Bishkek',
            isAdmin: false,
            wishlist: [],
            basket: [],
            chat: [],
            order: [],
            coupons: [
                'ItAcademy',
                'Nike400',
                'Jordan2024'
            ]
        })
            .then(() => props.navigate('/profile/user'))
            .catch(err => console.error(err));
    })
    .catch (() => props.showToast('Email is already used! Try continue with google on sign in page!'));
}

export default signInWithGoogle;