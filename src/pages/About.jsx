import React from "react";

export default function About() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8">
			<div className="mx-auto max-w-2xl  sm:py-28 lg:py-26">
				<div className="flex flex-col items-center">
					<img
						className="w-1/2 bg-gray-300 rounded-full mb-4 shrink-0"
						src="https://ca.slack-edge.com/TCVA3PF24-U0640C4HB5L-313b764ada25-512"
						alt="photo of developer"
					/>
				</div>

				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						abou me!
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Master diverse topics and dominate challenges!
					</p>
				</div>
				<div className="photo"></div>
			</div>
		</div>
	);
}
