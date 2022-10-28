import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					I am a budding Developer from Pune, India. I like to develop new websites in various fields. I have uploaded most of my collection on my <b>GITHUB</b> and <b>VERCEL</b>.
				</p>
				<p className="text-md text-gray-600 dark:text-gray-300">
					I am planning on moving to <b>WEB 3.0</b> infrastructure very soon. I aim to becoming one of the best <b>WEB DEVELOPER</b> in India.
				</p>
				<a
					href="http://peakyprogrammer.me/aaj-mai-uddenga"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					aaj-mai-uddenga
				</a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
