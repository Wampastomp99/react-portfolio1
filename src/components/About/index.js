import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Hi my name is michael oreilly i love fishing and hiking the mountains of utah and i am trying 
					to become a full stack web developer or i guess
					since i am in the end of this course i am one now
					i have worked on many projects and challanges in this
					course and have learnd alot (java, css, html, and more).
				</p>
				<p>
				take a look at some of the projects i have worked on.
				thanks
				</p>
			</div>
		</section>
	);
}

export default About;
