export const db_backup_categories = [
	{ id: 9, name: "General Knowledge" },

	{ id: 10, name: "Entertainment: Books" },

	{ id: 11, name: "Entertainment: Film" },

	{ id: 12, name: "Entertainment: Music" },

	{ id: 13, name: "Entertainment: Musicals & Theatres" },

	{ id: 14, name: "Entertainment: Television" },

	{ id: 15, name: "Entertainment: Video Games" },

	{ id: 16, name: "Entertainment: Board Games" },

	{ id: 17, name: "Science & Nature" },

	{ id: 18, name: "Science: Computers" },

	{ id: 19, name: "Science: Mathematics" },

	{ id: 20, name: "Mythology" },

	{ id: 21, name: "Sports" },

	{ id: 22, name: "Geography" },

	{ id: 23, name: "History" },

	{ id: 24, name: "Politics" },

	{ id: 25, name: "Art" },

	{ id: 26, name: "Celebrities" },

	{ id: 27, name: "Animals" },

	{ id: 28, name: "Vehicles" },

	{ id: 29, name: "Entertainment: Comics" },

	{ id: 30, name: "Science: Gadgets" },

	{ id: 31, name: "Entertainment: Japanese Anime & Manga" },

	{ id: 32, name: "Entertainment: Cartoon & Animations" },
];


export const db_backup_questions = [
	{
		type: "multiple",
		difficulty: "easy",
		category: "Entertainment: Video Games",
		question:
			"In vanilla Minecraft, which of the following cannot be made into a block?",
		correct_answer: "Charcoal",
		incorrect_answers: ["Coal", "Wheat", "String"],
	},
	{
		type: "boolean",
		difficulty: "medium",
		category: "Entertainment: Video Games",
		question:
			"&quot;Metal Gear Solid 3: Snake Eater&quot; takes place on Shadow Moses Island.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		type: "multiple",
		difficulty: "hard",
		category: "Science: Mathematics",
		question: "The decimal number 31 in hexadecimal would be what?",
		correct_answer: "1F",
		incorrect_answers: ["3D", "2E", "1B"],
	},
	{
		type: "boolean",
		difficulty: "medium",
		category: "General Knowledge",
		question:
			"Francis Bacon died from a fatal case of pneumonia while he was attempting to preserve meat by stuffing a chicken with snow.",
		correct_answer: "True",
		incorrect_answers: ["False"],
	},
	{
		type: "multiple",
		difficulty: "hard",
		category: "General Knowledge",
		question: "What is the romanized Chinese word for &quot;airplane&quot;?",
		correct_answer: "Feiji",
		incorrect_answers: ["Qiche", "Zongxian", "Huojian"],
	},
	{
		type: "multiple",
		difficulty: "easy",
		category: "Entertainment: Film",
		question:
			"In the movie &quot;Blade Runner&quot;, what is the term used for human-like androids ?",
		correct_answer: "Replicants",
		incorrect_answers: ["Cylons", "Synthetics", "Skinjobs"],
	},
	{
		type: "multiple",
		difficulty: "easy",
		category: "Entertainment: Japanese Anime &amp; Manga",
		question:
			"What is the last name of Edward and Alphonse in the Fullmetal Alchemist series.",
		correct_answer: "Elric",
		incorrect_answers: ["Ellis", "Eliek", "Elwood"],
	},
	{
		type: "multiple",
		difficulty: "medium",
		category: "Science &amp; Nature",
		question: "How old is the universe?",
		correct_answer: "13.8 Billion Years",
		incorrect_answers: [
			"4.5 Billion Years",
			"7.9 Billion Years",
			"16.2 Billion Years",
		],
	},
];