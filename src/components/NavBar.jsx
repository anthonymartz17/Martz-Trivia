import logo from "../assets/images/trivia-hero.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link to="/" className="-m-1.5 p-1.5">
						<img className="h-8 w-auto " src={logo} alt=""></img>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<Link
						to="/"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Home
					</Link>
					<Link
						to="/about"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						About
					</Link>
					<Link
						to="/new-game"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						New Game
					</Link>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>

			<div className="lg:hidden" role="dialog" aria-modal="true">
				<div className="fixed inset-0 z-50"></div>
				<div className=" opacity-0 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					{/* <div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img className="h-8 w-auto" src="" alt=""></img>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
						</button>
					</div> */}
					<div className="mt-6 flow-root ">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Link
									to="/"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Home
								</Link>
								<Link
									to="/about"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									About
								</Link>
								<Link
									to="/new-game"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									New Game
								</Link>
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
