import logo from "../assets/images/trivia-hero.svg";

export default function Home() {
	return (
		<>
			<div className="bg-white">
				<header className="absolute inset-x-0 top-0 z-50">
					<nav
						className="flex items-center justify-between p-6 lg:px-8"
						aria-label="Global"
					>
						<div className="flex lg:flex-1">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img  className="h-8 w-auto " src={logo} alt=""></img>
							</a>
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
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Home
							</a>
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								About
							</a>
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								New Game
							</a>
						</div>
						<div className="hidden lg:flex lg:flex-1 lg:justify-end">
							<a
								href="#"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Log in <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</nav>

					<div className="lg:hidden" role="dialog" aria-modal="true">
						<div className="fixed inset-0 z-50"></div>
						<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
							<div className="flex items-center justify-between">
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
							</div>
							<div className="mt-6 flow-root">
								<div className="-my-6 divide-y divide-gray-500/10">
									<div className="space-y-2 py-6">
										<a
											href="#"
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											Home
										</a>
										<a
											href="#"
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											About
										</a>
										<a
											href="#"
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											New Game
										</a>
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

				<div className="relative isolate px-6 pt-14 lg:px-8">
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					></div>
					<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Unleash your inner trivia hero now!
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Master diverse topics and dominate challenges!
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="#"
									className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Start Playing
								</a>
							</div>
						</div>
					</div>
					<div
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
						aria-hidden="true"
					></div>
				</div>
			</div>
		</>
	);
}
