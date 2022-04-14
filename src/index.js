import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartProvider } from "./context/cart";
import { CatagoriesProvider } from "./context/catagories.context";
import { UserProvider } from "./context/user";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<CatagoriesProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</CatagoriesProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
	// document.getElementById("root")
);
