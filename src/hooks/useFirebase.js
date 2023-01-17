import { useEffect, useState } from "react"
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
const useFirebase = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({});
    useEffect(() => {

    }, [])

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    const SignOutFormGoogle = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                // An error happened.
            });
    }

    return { user, setUser, signInWithGoogle, SignOutFormGoogle };
}

export default useFirebase;