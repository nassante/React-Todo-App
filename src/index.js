require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";

const appElement = document.getElementById("root");

reactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	appElement
);
