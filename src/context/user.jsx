import { createContext, useState } from "react";

//as the actual value
export const UserContext = createContext({
	currentUser: null,
	setcurrentUser: () => null,
});

//provider

export const UserProvider = ({ children }) => {
	const [currentUser, setcurrentUser] = useState(null);
	const value = { currentUser, setcurrentUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
