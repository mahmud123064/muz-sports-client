import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email and password

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Log Out 

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // User auth changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;