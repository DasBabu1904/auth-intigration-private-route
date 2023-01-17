import { useEffect, useState } from "react"
import App from "../App";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const useFirebase = () => {
    const auth = getAuth(App);
    const googleProvider = GoogleAuthProvider()
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

    return { user, setUser, signInWithGoogle };
}

export default useFirebase;