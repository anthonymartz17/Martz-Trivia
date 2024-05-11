import React, { useEffect } from "react";
import TriviaCard from "../components/TriviaCard";
import { useState } from "react";

export default function Trivia({ currentGameQuestions }) {
	
	const [isGameOver, setIsGameOver] = useState(false);
	useEffect(() => {}, [isGameOver]);

	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			{isGameOver ? (
				<p>GAME OVER</p>
			) : (
				<TriviaCard
					setIsGameOver={setIsGameOver}
					currentGameQuestions={currentGameQuestions}
				/>
			)}
		</div>
	);
}
