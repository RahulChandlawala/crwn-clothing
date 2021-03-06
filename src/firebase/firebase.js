import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import {
	getFirestore,
	collection,
	doc,
	getDoc,
	setDoc,
	writeBatch,
	query,
	getDocs,
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

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = collection(db, collectionKey);
	const batch = writeBatch(db);

	objectsToAdd.forEach((Object) => {
		const docRef = doc(collectionRef, Object.title.toLowerCase());
		batch.set(docRef, Object);
	});

	await batch.commit();
	console.log("done");
};

export const getCatagoriesAndDocuments = async () => {
	const collectionRef = collection(db, "catagoeirs");
	const q = query(collectionRef);

	const querySnapshop = await getDocs(q);
	const catagoryMap = querySnapshop.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data();

		acc[title.toLowerCase()] = items;
		return acc;
	}, {});

	return catagoryMap;
};

export const createUsersProfileDocument = async (
	userAuth,
	additionalInfo = {}
) => {
	if (!userAuth) return;
	const userRef = doc(db, "users", userAuth.uid);

	const snapshot = await getDoc(userRef);

	if (!snapshot.exists()) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createAt,
				...additionalInfo,
			});
		} catch (err) {
			console.log("error creating the user", err.message);
		}
	}
	return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = async () =>
	signInWithPopup(auth, provider).then((re) => {});

export const createUser = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const NormalSignIn = async (email, password) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback);
