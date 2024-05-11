import NewGameForm from "../components/NewGameForm";

export default function NewGame({ setCurrentGameQuestions }) {
	return (
		<div className="flex flex-col items-center isolate px-6 pt-14 lg:px-8  py-32 sm:py-48 lg:py-56">
			<NewGameForm setCurrentGameQuestions={setCurrentGameQuestions} />
		</div>
	);
}
