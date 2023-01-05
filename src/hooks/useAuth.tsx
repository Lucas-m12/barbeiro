import { useEffect, useState } from "react";

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const signIn = (token: string) => {
		setIsAuthenticated(true);
		localStorage.setItem("token", token);
	};

	const signOut = () => {
		setIsAuthenticated(false);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) setIsAuthenticated(true);
	}, []);

	return {
		isAuthenticated,
		signIn,
		signOut
	};
};
