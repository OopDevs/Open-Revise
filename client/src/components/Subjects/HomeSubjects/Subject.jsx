import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const buttonOption = ["Past Papers", "Worksheets", "Notes"];

function subject(props) {
	const title = props.title.toLowerCase()
	return (
		<div className="HomeSubject">
			<div className="HomeSubject-heading">
				<img src={props.img} />
				<Link to={`${title}`}>
					{props.title}
				</Link>
			</div>
			<div className="HomeSubject-buttons">
				<Button>
					<Link to={`${title}/past-papers`}>
						{buttonOption[0]}
					</Link>
				</Button>
				<Button>
					<Link to={`${title}/workesheets`}>
						{buttonOption[1]}
					</Link>
				</Button>
				<Button>
					<Link to={`${title}/notes`}>
						{buttonOption[2]}
					</Link>
				</Button>
			</div>
		</div>
	);
}

export default subject;