import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebaseConfig';


export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}


export const handleGoogleSignIn = () => {

    var googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            var {displayName, email} = result.user;

            const user = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success: true,
                isFieldValid: true
            };
            return user;
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });

}