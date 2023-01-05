import LockIcon from "@/assets/icons/lock.svg";
import MailIcon from "@/assets/icons/mail.svg";
import SignUpIcon from "@/assets/icons/signUp.svg";
import socialAppleIcon from "@/assets/icons/social-apple.svg";
import socialFacebookIcon from "@/assets/icons/social-facebook.svg";
import socialGoogleIcon from "@/assets/icons/social-google.svg";
import Logo from "@/assets/images/logo.svg";

import PrincipalImage from "@/assets/images/principal.jpg";
import { Image } from "@/components/Image";
import { Button, ButtonGroup, Container, CreateAccount, Form, FormGroup, Input, InputArea, LogoContainer, SocialArea } from "./styles";
import { useLogin } from "./useLogin";

export const Login = () => {
	const {handleClickSignUp} = useLogin();
	const isApple = navigator.userAgent.indexOf("Macintosh") !== -1 || navigator.userAgent.indexOf("iOS") !== -1 || navigator.userAgent.indexOf("iPhone") !== -1;

	return (
		<Container>
			<section className="left-side">
				<LogoContainer>
					<Image src={Logo} alt="logo barbearia" />
				</LogoContainer>
				<Form>
					<FormGroup>
						<InputArea>
							<Image src={MailIcon} alt="icone de email" />
							<Input placeholder="Email" type="email" />
						</InputArea>
						<InputArea>
							<Image src={LockIcon} alt="icone de cadeado" />
							<Input placeholder="Senha" type="password" />
						</InputArea>
					</FormGroup>
					<ButtonGroup>
						<button></button>
						<Button type="submit">Entrar</Button>
						<Button variant="outlined" type="button">Esqueci minha senha</Button>
					</ButtonGroup>
					<SocialArea>
						<Image
							src={socialGoogleIcon}
							alt="login-social-google"
						/>
						<Image
							src={socialFacebookIcon}
							alt="login-social-facebook"
						/>
						{
							isApple ? (
								<Image
									src={socialAppleIcon}
									alt="login-social-apple"
								/>
							) : (null)
						}
					</SocialArea>
					<CreateAccount
						onClick={handleClickSignUp}
					>
						<Image src={SignUpIcon} alt="icone para criar conta" />
						<span>
							Criar conta
						</span>
					</CreateAccount>
				</Form>
			</section>
			<section
				className="right-side"
				style={{
					backgroundImage: `url(${PrincipalImage})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover"
				}}
			/>
		</Container>
	);
};
