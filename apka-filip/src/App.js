import React, { Component } from "react";
import "./App.css";
import Form from "./componenty/Main/Form";
import Result from "./componenty/Main/Result";
import Days from "./componenty/Extra/Days";
import Loading from "./componenty/Extra/Loading";
import "./css/fontello.css";

class App extends Component {
	state = {
		weatherNow: {},
		weather5: {},
		loading: false,
		value: "Pionki"
	};
	componentDidMount() {
		this.loadNow();
		this.load5Days();
	}
	loadNow = () => {
		this.setState({ loading: true });
		const API = `https://api.openweathermap.org/data/2.5/weather?q=${
			this.state.value
		}&appid=216a9e8c3d7e5f5f8bfa2d08aed0f892&units=metric`;
		fetch(API)
			.then(response => response.json())
			.then(data => {
				this.setState({ loading: false, weatherNow: data });
			})
			.catch(err => {
				console.log(err);
			});
	};
	load5Days = localAPI => {
		const API = `https://api.openweathermap.org/data/2.5/forecast?q=${
			this.state.value
		}&appid=216a9e8c3d7e5f5f8bfa2d08aed0f892&units=metric`;
		fetch(API)
			.then(response => response.json())
			.then(data => {
				this.setState({ loading: false, weather5: data });
			})
			.catch(err => {
				console.log(err);
			});
	};
	InputChange = a => {
		this.setState({
			value: a.target.value
		});
	};

	Szukaj = a => {
		a.preventDefault();
		this.loadNow();
		this.load5Days();
	};

	render() {
		const { loading, value, weather5 } = this.state;
		return (
			<div className="App">
				<div className="Nav">
					<button className="lupa">
						<div className="icone lupa" />
					</button>
					<Form text={value} change={this.InputChange} submit={this.Szukaj} />
				</div>
				{loading ? (
					<Loading />
				) : (
					<div>
						<Result weather={this.state} />
						<div className="days">
							{" "}
							<Days weather={weather5} />{" "}
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default App;
