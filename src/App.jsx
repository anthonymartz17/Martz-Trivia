import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NewGame from "./pages/NewGame";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/new-game" element={<NewGame />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
