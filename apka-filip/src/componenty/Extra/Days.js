import React from "react";

const Days = props => {
	const content = props.weather.list
		? props.weather.list.slice(0, 3).map(w => (
				<div className="day">
					<h2>{Math.round(w.main.temp)}&#176;C</h2>
					<img src={`http://openweathermap.org/img/w/${w.weather[0].icon}.png`} alt="" className="obr" />
				</div>
		  ))
		: "";

	return content;
};

export default Days;
