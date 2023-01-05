import Home from "@/screens/Home";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./screens/Login";

export const Router = () => {
	const {isAuthenticated} = useAuth();

	if (!isAuthenticated) {
		return (
			<Routes>
				<Route element={<Login />} index />
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path="/" element={<Home />} index />
		</Routes>
	);
};
