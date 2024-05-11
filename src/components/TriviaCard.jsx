import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const testQA = [
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "In vanilla Minecraft, which of the following cannot be made into a block?",
      "correct_answer": "Charcoal",
      "incorrect_answers": [
          "Coal",
          "Wheat",
          "String"
      ]
  },
  {
      "type": "boolean",
      "difficulty": "medium",
      "category": "Entertainment: Video Games",
      "question": "&quot;Metal Gear Solid 3: Snake Eater&quot; takes place on Shadow Moses Island.",
      "correct_answer": "False",
      "incorrect_answers": [
          "True"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "hard",
      "category": "Science: Mathematics",
      "question": "The decimal number 31 in hexadecimal would be what?",
      "correct_answer": "1F",
      "incorrect_answers": [
          "3D",
          "2E",
          "1B"
      ]
  },
  {
      "type": "boolean",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "Francis Bacon died from a fatal case of pneumonia while he was attempting to preserve meat by stuffing a chicken with snow.",
      "correct_answer": "True",
      "incorrect_answers": [
          "False"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "What is the romanized Chinese word for &quot;airplane&quot;?",
      "correct_answer": "Feiji",
      "incorrect_answers": [
          "Qiche",
          "Zongxian",
          "Huojian"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Film",
      "question": "In the movie &quot;Blade Runner&quot;, what is the term used for human-like androids ?",
      "correct_answer": "Replicants",
      "incorrect_answers": [
          "Cylons",
          "Synthetics",
          "Skinjobs"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Japanese Anime &amp; Manga",
      "question": "What is the last name of Edward and Alphonse in the Fullmetal Alchemist series.",
      "correct_answer": "Elric",
      "incorrect_answers": [
          "Ellis",
          "Eliek",
          "Elwood"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Science &amp; Nature",
      "question": "How old is the universe?",
      "correct_answer": "13.8 Billion Years",
      "incorrect_answers": [
          "4.5 Billion Years",
          "7.9 Billion Years",
          "16.2 Billion Years"
      ]
  },
]

export default function TriviaCard() {
	return (
		<>

			<div className="block w-3/4 min-h-60 p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
				<div className="timer-wrapper">
          <CountdownCircleTimer
						isPlaying
						size="50"
						strokeWidth="3"
						trailColor="#2b394b"
						duration={10}
						colors={["#ffffff", "#FDDE55", "#C40C0C", "#C40C0C"]}
						colorsTime={[10, 6, 3, 0]}
						onComplete={() => ({ shouldRepeat: false, delay: 1 })}
					>
						{({ remainingTime }) => {
							return <span className="text-white">{remainingTime}</span>;
						}}
					</CountdownCircleTimer>
				</div>
				<h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Here goes the question, how long can it be?
				</h5>

				<div className="grid lg:grid-cols-2 sm:grid-cols-1">
					<div className="flex items-center mb-4 cursor-pointer w-fit">
						<input
							id="default-radio-1"
							type="radio"
							value=""
							name="default-radio"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						></input>
						<label
							htmlFor="default-radio-1"
							className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Default radio
						</label>
					</div>
					<div className="flex items-center mb-4 cursor-pointer w-fit">
						<input
							id="default-radio-2"
							type="radio"
							value=""
							name="default-radio"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						></input>
						<label
							htmlFor="default-radio-2"
							className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Default radio
						</label>
					</div>
					<div className="flex items-center mb-4 cursor-pointer w-fit">
						<input
							id="default-radio-1"
							type="radio"
							value=""
							name="default-radio"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						></input>
						<label
							htmlFor="default-radio-1"
							className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Default radio
						</label>
					</div>
					<div className="flex items-center mb-4 cursor-pointer w-fit">
						<input
							id="default-radio-1"
							type="radio"
							value=""
							name="default-radio"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						></input>
						<label
							htmlFor="default-radio-1"
							className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Default radio
						</label>
					</div>
					<div className="flex items-center mb-4 cursor-pointer w-fit">
						<input
							id="default-radio-1"
							type="radio"
							value=""
							name="default-radio"
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						></input>
						<label
							htmlFor="default-radio-1"
							className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Default radio
						</label>
					</div>
				</div>
			</div>
		</>
	);
}
