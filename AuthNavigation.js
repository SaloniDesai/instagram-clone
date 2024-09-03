import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { SignedInStack, SignedOutStack } from './Navigation';

const AuthNavigation = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const auth = getAuth();
    console.log("user", currentUser);
    const userHandler = (user) => {
        user ? setCurrentUser(user) : setCurrentUser(null);
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => userHandler(user))
    },[]);
    return <>{currentUser ? <SignedInStack/> : <SignedOutStack/>}</>
}
export default AuthNavigation;