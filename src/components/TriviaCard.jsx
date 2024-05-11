import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
export default function TriviaCard({ setIsGameOver, currentGameQuestions }) {
	const navigate = useNavigate();
	const questions = currentGameQuestions.map((ele) => ({
		...ele,
		answer_options: [...ele.incorrect_answers, ele.correct_answer],
	}));
	const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
	const [questionIdx, setQuestionIdx] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [timer, setTimer] = useState();
	const [pauseCount, setPauseCount] = useState(false);

	function handleSubmit(e) {
		if (e.target) e.preventDefault();
		clearTimeout(timer);

		setSubmitted((prev) => !prev);
		setPauseCount((prev) => !prev);

		const timerId = setTimeout(() => {
			setQuestionIdx((prev) => prev + 1);
			setSubmitted((prev) => !prev);
			setPauseCount((prev) => !prev);
		}, 3000);
		setTimer(timerId);
	}

	useEffect(() => {
		if (questionIdx === questions.length) setIsGameOver(true);
		setCurrentQuestion(questions[questionIdx]);
		setSelectedAnswer("");
		console.log(questionIdx);
	}, [questionIdx]);

	useEffect(() => {
		if (currentGameQuestions.length === 0) navigate("/new-game");
	}, []);

	return (
		<>
			{currentGameQuestions.length === 0 ? (
				<p>Go back to settings</p>
			) : (
				<div className="block w-3/4 min-h-60 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
					<div className="timer-wrapper">
						<CountdownCircleTimer
							key={questionIdx}
							isPlaying={!pauseCount}
							size="50"
							strokeWidth="3"
							trailColor="#2b394b"
							duration={10}
							colors={["#ffffff", "#FDDE55", "#C40C0C", "#C40C0C"]}
							colorsTime={[10, 6, 3, 0]}
							onComplete={(e) => {
								handleSubmit(e);
								return { shouldRepeat: false, delay: 1 };
							}}
						>
							{({ remainingTime }) => {
								return <span className="text-white">{remainingTime}</span>;
							}}
						</CountdownCircleTimer>
					</div>
					<h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{currentQuestion.question}
					</h5>
					<form onSubmit={handleSubmit}>
						<div className="grid lg:grid-cols-2 sm:grid-cols-1">
							{currentQuestion.answer_options.map((ele, idx) => {
								return (
									<div className="mb-4 w-fit px-2" key={idx}>
										<input
											onChange={(e) => setSelectedAnswer(e.target.value)}
											required
											id={idx}
											type="radio"
											value={ele}
											name="answers"
											className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
										></input>
										<label
											htmlFor={idx}
											className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											{ele}
										</label>
										{submitted && (
											<span>
												{currentQuestion.incorrect_answers.some(
													(ans) => ans == ele
												) ? (
													<span className="ml-3 text-red-600">Incorrect</span>
												) : (
													<span className="ml-3 text-green-600">Correct</span>
												)}
											</span>
										)}
									</div>
								);
							})}
						</div>
						<div className="flex justify-end">
							<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
								Submit
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
}
