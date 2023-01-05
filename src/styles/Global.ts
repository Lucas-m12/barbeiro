import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}

	input, button {
		border: none;
		outline: none;
	}

	button {
		cursor: pointer;
	}
`;
