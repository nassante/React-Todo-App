import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route element={<PublicLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
