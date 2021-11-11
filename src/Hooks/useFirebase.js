import {useState , useEffect} from 'react';
import { getAuth , GoogleAuthProvider , signInWithPopup , createUserWithEmailAndPassword  , signOut , onAuthStateChanged , GithubAuthProvider , updateProfile ,signInWithEmailAndPassword  } from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google login ------------------->

    const SigninGoogle = ( history , redirect_location , setError) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, "PUT");
            history.push(redirect_location);
        }).catch(() => setError("something Wrong"))
        .finally(() => setIsLoading(false));
        setError("");
    }

    // github login -------------------->

    const SigninGithub = (history , redirect_location , setError) => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, "PUT");
            history.push(redirect_location);
        }).catch(() => setError("something Wrong"))
        .finally(() => setIsLoading(false));
        setError("");
    }

    // deploy_displayName ---------------->

    const deploy_displayName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) =>{});
    };

    // email password singup ------------------------------>

    const SignupEmailAndPassword = (email, password, name) => {
        setIsLoading(false);
        return createUserWithEmailAndPassword(auth, email, password , name);
    }

    // email password sinin ------------------------------->

    const logInEmailAndPassword = (email, password) => {
        setIsLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // search admin ----------------------->

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
            }, [user.email]);

    // observer user state ------------------->
    
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    
    // user logout state set ---------------->

    const logOut = () => {
        return signOut(auth)
    }

    // datebase post on register user --------------------------->

    const saveUser = (email, displayName , method) => {
        const user = { email, displayName };
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }

    return {
        user,
        setUser,
        logOut,
        SigninGoogle,
        SigninGithub,
        SignupEmailAndPassword,
        auth,
        deploy_displayName,
        isLoading,
        setIsLoading,
        logInEmailAndPassword,
        saveUser,
        admin
    }
};

export default useFirebase;