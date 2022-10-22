import React, { createContext, useContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const registerAndLoginWithProvider = (provider) => {
        return signInWithPopup(auth, provider);
    };

    const values = {
        user,
        createUser,
        profileUpdate,
        logOut,
        logIn,
        registerAndLoginWithProvider,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
