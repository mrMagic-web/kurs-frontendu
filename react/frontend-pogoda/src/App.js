import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer";
import Contact from "./Contact";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 24,
			contacts: []
		};
	}
	componentDidMount() {
		fetch("https://randomuser.me/api/?format=json&results=10")
			.then(res => res.json())
			.then(json => this.setState({ contacts: json.results }));
	}
	urodziny = () => {
		this.setState({ age: this.state.age + 1 });
	};

	render() {
		return (
			<div className="App">
				<div>
					{this.state.age}
					<header className="App-header" />
					{this.state.contacts.map(user => (
						<Contact key={user.cell} user={user} />
					))}
				</div>
				<Footer urodziny={this.urodziny} />
			</div>
		);
	}
}

export default App;
