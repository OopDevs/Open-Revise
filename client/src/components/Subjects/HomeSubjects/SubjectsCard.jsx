import React from "react";
import { Link } from "react-router-dom";
import Subject from "./Subject";
import subjects from "../AllSubjects/Subjects";
import "./HomeSubjects.css";


function SubjectsCard() {
	// so that only 6 subjects are renderd on the home page
	const Reducedsubjects = subjects.slice(0, 6)
	console.log(Reducedsubjects);

	return (
		<section className="subjects-section">
			<div className="HomeSubjects-container ">
				<div className="HomeSubjects-heading">
					<h1>Subjects</h1>
					<Link to="/subjects">All Subjects</Link>
				</div>
				<div className="HomeSubjects">
					{Reducedsubjects.map((subject) => {
						return <Subject key={subject.id} {...subject} />;
					})}
				</div>
			</div>
		</section>
	);
}
export default SubjectsCard;
