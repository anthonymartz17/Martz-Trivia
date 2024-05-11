import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions, getCategories } from "../services/triviaApi";
import { db_backup_questions, db_backup_categories } from "../assets/backupDB";
const difficulty = ["Easy", "Medium", "Hard"];
const type = ["Multiple Choice", "True/False"];

export default function NewGameForm({ setCurrentGameQuestions }) {
	const navigate = useNavigate();
	const [gameSettings, setGameSettings] = useState({
		amount: 10,
		category: "",
		difficulty: "",
		type: "",
	});

	const [categories, setCategories] = useState([]);

	function handleChangeSettings(e) {
		const { id, value } = e.target;

		setGameSettings((prev) => ({ ...prev, [id]: value }));
	}

	async function setCategoryList() {
		try {
			const { trivia_categories } = await getCategories();
			setCategories(trivia_categories);
		} catch (error) {
			setCategories(db_backup_categories);
			console.log(error);
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const { results } = await getQuestions(gameSettings);
			console.log(results, "hay questions");
			setCurrentGameQuestions(results);
		} catch (error) {
			setCurrentGameQuestions(db_backup_questions);
			console.log(error);
		} finally {
			navigate("/trivia");
		}
	}

	useEffect(() => {
		setCategoryList();
	}, []);

	return (
		<form
			className="w-1/3 p-2 mx-auto rounded-lg shadow bg-gray-700"
			onSubmit={handleSubmit}
		>
			<div className="max-w-sm mx-auto">
				<label
					htmlFor="number-input"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Number of questions:
				</label>
				<input
					onChange={handleChangeSettings}
					type="number"
					id="amount"
					value={gameSettings.amount}
					aria-describedby="helper-text-explanation"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="90210"
					required
				/>
			</div>

			<select
				id="category"
				onChange={handleChangeSettings}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				value={gameSettings.category}
			>
				<option value="" disabled>
					Category
				</option>

				{categories.map((ele, idx) => (
					<option key={idx} value={ele.id}>
						{ele.name}
					</option>
				))}
			</select>
			<select
				onChange={handleChangeSettings}
				id="type"
				value={gameSettings.type}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option value="" disabled>
					Type
				</option>

				{type.map((ele, idx) => (
					<option key={idx} value={ele}>
						{ele}
					</option>
				))}
			</select>
			<select
				onChange={handleChangeSettings}
				id="difficulty"
				value={gameSettings.difficulty}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option value="" disabled>
					Difficulty
				</option>

				{difficulty.map((ele, idx) => (
					<option key={idx} value={ele}>
						{ele}
					</option>
				))}
			</select>

			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	);
}
