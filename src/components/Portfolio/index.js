import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Social media api',
			description:
				'This is a social media api that letst you add people add comments and more',
			image: 'social.png',
			technologies: [
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
			],
			github: 'https://github.com/Wampastomp99/social-media-api1',
			
		},
		{
			name: 'New Project',
			description:
				'this pace will be fuilled with my now project that i will be working on in the next 2 weeks',
			image: 'cogs.png',
			technologies: [
				'TBD',
			],
			github: 'https://github.com/Wampastomp99',
			
		},
		{
			name: 'Readme Maker 10000',
			description:
				'This is a read me generator that helps you not have to type them out all the dang time',
			image: 'paper.png',
			technologies: ['HTML/CSS', 'JavaScript',],
			github: 'https://github.com/Wampastomp99/Readme-Maker-10000',
			deployed: '',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget-tracker-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/Wampastomp99/pwa-budget-tracker1',
			deployed: '',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Wampastomp99/Weather',
			deployed: '',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/Wampastomp99/Password-Generator',
			deployed: '',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/Wampastomp99/note-taker',
			deployed: '',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
