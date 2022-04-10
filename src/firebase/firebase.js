// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const config = {
	apiKey: "AIzaSyCAr_Vm3s8fdbl1jZyhULc0V0Kwsftd6cI",
	authDomain: "crown-dp-8f4d8.firebaseapp.com",
	projectId: "crown-dp-8f4d8",
	storageBucket: "crown-dp-8f4d8.appspot.com",
	messagingSenderId: "938889189563",
	appId: "1:938889189563:web:48e659e82aae703533f19e",
	measurementId: "G-YKC9X90406",
};

export const app = initializeApp(config);
export const auth = getAuth(app);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () =>
	signInWithPopup(auth, provider).then((re) => {
		// console.log(re);
	});

export default firebase;
