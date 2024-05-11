import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NewGame from "./pages/NewGame";
import NavBar from "./components/NavBar";
import Trivia from "./pages/Trivia";
function App() {
	const [currentGameQuestions, setCurrentGameQ] = useState([]);
	function setCurrentGameQuestions(data) {
		console.log(data, "llego algo");
		setCurrentGameQ(data);
	}
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/new-game"
						element={
							<NewGame setCurrentGameQuestions={setCurrentGameQuestions} />
						}
					/>
					<Route
						path="/trivia"
						element={<Trivia currentGameQuestions={currentGameQuestions} />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
