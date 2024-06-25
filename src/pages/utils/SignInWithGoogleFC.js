import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../FirebaseConfig";

function signInWithGoogle(props) {
    signInWithPopup(auth, googleProvider)
    .then(() => props.navigate('/profile/user'))
    .catch(err => console.error(err));
}

export default signInWithGoogle;