import React from "react";

const Form = props => {
	return (
		<form onSubmit={props.submit} className="nav-bar">
			<input className="wpis" type="text" placeholder="np. Pionki" onChange={props.change} />
			<button className="przycisk">Szukaj</button>
		</form>
	);
};

export default Form;
