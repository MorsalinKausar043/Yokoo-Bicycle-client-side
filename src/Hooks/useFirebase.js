import {useState , useEffect} from 'react';
import { getAuth , GoogleAuthProvider , signInWithPopup , createUserWithEmailAndPassword  , signOut , onAuthStateChanged , GithubAuthProvider , updateProfile ,signInWithEmailAndPassword  } from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google login ------------------->

    const SigninGoogle = () => {
        setIsLoading(false);
        return signInWithPopup(auth, googleProvider)
    }

    // github login -------------------->

    const SigninGithub = () => {
        setIsLoading(false);
       return signInWithPopup(auth, githubProvider)
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
    
    const logOut = () => {
        return signOut(auth)
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
        logInEmailAndPassword
    }
};

export default useFirebase;