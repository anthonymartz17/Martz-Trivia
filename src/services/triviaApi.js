export async function getQuestions(settings) {
	console.log(settings, "settings");
	try {
		const response = await fetch(
			`${import.meta.env.VITE_TRIVIA_QUESTIONS}?amount=${settings.amount}`
		);

		if (!response.ok) {
			throw Error("Network response not ok");
		}
		return response.json();
	} catch (error) {
		throw error;
	}
}

export async function getCategories() {
	try {
		const response = await fetch(import.meta.env.VITE_TRIVIA_CATEGORY_LIST);

		if (!response.ok) {
			throw Error("Network response not ok");
		}
		return response.json();
	} catch (error) {
		throw error;
	}
}
