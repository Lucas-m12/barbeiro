import { useState } from "react";

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const signIn = (cb?: VoidFunction) => {
		setIsAuthenticated(true);
		if (typeof cb !== "undefined") cb();
	};

	const signOut = (cb?: VoidFunction) => {
		setIsAuthenticated(false);
		if (typeof cb !== "undefined") cb();
	};

	return {
		isAuthenticated,
		signIn,
		signOut
	};
};
