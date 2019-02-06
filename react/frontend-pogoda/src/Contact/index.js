import React from "react";

const Conatct = props => {
	const { cell, picture, name } = props.user;
	return (
		<div className="contact">
			<div className="image">
				<img src={picture.large} alt={name.first} />
			</div>
			<h2>{cell}</h2>
		</div>
	);
};

export default Conatct;
