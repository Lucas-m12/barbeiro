import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { GlobalStyles } from "./styles/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Router />
			<GlobalStyles />
		</BrowserRouter>
	</React.StrictMode>,
);
