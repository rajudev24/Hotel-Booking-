import { useEffect, useState } from "react";
import firebaseInitializeApp from "../Firebase/firbaseInitialize";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


firebaseInitializeApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, navigate) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const user = userCredential.user;
                navigate('/')
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false);
        });
    }, [])

    const loginUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                // const path = location?.state?.from || '/'
                // navigate(path)
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            });
    }



    const signInUsingGoogle = (navigate) => {
        return signInWithPopup(auth, googleProvider)
            .then((user)=>{
                navigate('/')
            })
            .finally(() => { setLoading(false) });
    }

    const logoutUser = () => {
        const auth = getAuth();
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => {
                setLoading(false)
            });
    }

    return {
        user,
        error,
        loading,
        registerUser,
        loginUser,
        logoutUser,
        signInUsingGoogle,
    }
}

export default useFirebase;