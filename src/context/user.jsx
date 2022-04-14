import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../firebase/firebase";

//as the actual value
export const UserContext = createContext({
	currentUser: null,
	setcurrentUser: () => null,
});

//provider

export const UserProvider = ({ children }) => {
	const [currentUser, setcurrentUser] = useState(null);
	const value = { currentUser, setcurrentUser };
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			// console.log(user);
			setcurrentUser(user);
		});
		return unsubscribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
