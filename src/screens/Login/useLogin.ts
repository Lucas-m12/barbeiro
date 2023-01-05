import { useAuth } from "@/hooks/useAuth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
	const redirect = useNavigate();
	const {signIn} = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClickSignUp = () => {
		redirect("/signUp");
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		/**
		 *
		 * BLOCO DE CÓDIGO DESTINADO A FAZER INTEGRACAO COM API E VALIDACOES
		 *
		 */
		signIn("123");
		redirect("/");
	};

	return {
		handleClickSignUp,
		setEmail,
		setPassword,
		handleSubmit
	};
};
