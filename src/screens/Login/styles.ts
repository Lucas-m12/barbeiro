import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "contained" | "outlined";
}

export const Container = styled.section`
	width: 100vw;
	height: 100vh;
	display: flex;
	background: #312E38;

	.left-side {
		width: 50vw;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		@media (max-width: 1000px) {
			width: 100vw;
		}
	}

	.right-side {
		width: 50vw;
		opacity: 0.8;
		mix-blend-mode: hard-light;

		@media (max-width: 1000px) {
			display: none;
		}
	}
`;
export const LogoContainer = styled.div`
	width: 230px;
	height: 134px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export const LogoText = styled.h3`
	color: #999591;
`;
export const Title = styled.h1`
	margin-top: 6vh;
	font-family: "Roboto Slab";
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 32px;
	text-align: center;
	color: #F4EDE8;
`;
export const Form = styled.form`
	margin-top: 2vh;
`;
export const FormGroup = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	& input:not(:first-child) {
		margin-top: 1vh;
	}
`;
export const InputArea = styled.div`
	position: relative;

	& img {
		position: absolute;
		width: 20px;
		height: 18px;
		left: 8px;
		top: 35px;
	}
`;
export const Input = styled.input`
	background: #232129;
	width: 340px;
	height: 56px;
	border-radius: 10px;
	padding: 8px;
	padding-left: 32px;
	font-family: "Roboto Slab";
	font-style: normal;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 21px;
	display: flex;
	align-items: center;
	color: #666360;

	@media screen and (max-width: 380px) {
		width: 280px;
	}

	@media screen and (max-width: 330px) {
		width: 240px;
	}
`;
export const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 3vh;
`;
export const Button = styled.button<ButtonProps>`
	width: 380px;
	height: 56px;
	border-radius: 10px;
	font-family: "Roboto Slab";
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	text-align: center;
	color: ${({variant}) => variant === "outlined" ? "#FFF" : "#312E38" };

	background: ${({variant}) => variant === "outlined" ? "transparent" : "#FF9000" };
	text-decoration: ${({variant}) => variant === "outlined" ? "underline" : "none" };

	@media screen and (max-width: 380px) {
		width: 320px;
	}

	@media screen and (max-width: 330px) {
		width: 280px;
	}
`;
export const SocialArea = styled.div`
	margin-top: 2vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	& img {
		width: 40px;
		height: 40px;
		cursor: pointer;
	}
`;
export const CreateAccount = styled.div`
	margin-top: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	& span {
		margin-left: 16px;
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		text-align: center;
		color: #FF9000;
	}

`;
