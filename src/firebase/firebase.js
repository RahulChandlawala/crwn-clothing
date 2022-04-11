import { addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
	getFirestore,
	collection,
	query,
	doc,
	where,
	getDoc,
	setDoc,
} from "firebase/firestore";

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
export const db = getFirestore();
export const auth = getAuth();

export const createUsersProfileDocument = async (userAuth) => {
	if (!userAuth) return;
	const userRef = doc(db, "users", userAuth.uid);
	console.log(userRef);

	const snapshot = await getDoc(userRef);
	console.log(snapshot);
	console.log(snapshot.exists());

	if (!snapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createAt,
			});
		} catch (err) {
			console.log("error creating the user", err.message);
		}
	}
	return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () =>
	signInWithPopup(auth, provider).then((re) => {});
