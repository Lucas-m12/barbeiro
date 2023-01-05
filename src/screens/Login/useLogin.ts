import { useNavigate } from "react-router-dom";

export const useLogin = () => {
	const redirect = useNavigate();

	const handleClickSignUp = () => {
		redirect("/signUp");
	};

	return {
		handleClickSignUp
	};
};
