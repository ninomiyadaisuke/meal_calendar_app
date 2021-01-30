import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/theme";

ReactDOM.render(
	<>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</>,
	document.getElementById("root")
);
