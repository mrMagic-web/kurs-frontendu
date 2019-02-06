//  --------------------------------
//  ---- Renderowanie warunkowe ----
//  --------------------------------
// W React.js możesz pokazywać różne komponenty w zależności od naszych potrzeb. W jednym komponencie możemy użyć wielu różnych.
// Przykładem może być użycie spinnera w czasie ładowania danych.

if (isLoading) {
	return <Loader />;
}
return (
	<div>
		<h1>Hello World</h1>
		<Komponent />
	</div>
);

//  --------------------------------
//  ----------- Zadanie ------------
//  --------------------------------

// W swojej apce pogodowej użyj komponentu loading w trakcie ładowania fetcha.

// -----------------------------------------------------------

//   -----------------------
//   -------- Formy --------
//   -----------------------
// W HTML elementy typu <input>, <textarea> i <select> utrzymują swój własny stan i są automatycznie zmieniane. W React.js przypisujemy wartość pul valueowych w stanie komponentu a zmieniamy używając setState().

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		// ustalamy wartość początkową
		this.state = { value: "" };
		// bindujemy nasze funkcje
		this.zmienValue = this.zmienValue.bind(this);
		this.zapiszZmiany = this.zapiszZmiany.bind(this);
	}
	// metoda pozwlająca na zmianę wartości w stanie
	zmienValue(event) {
		this.setState({ value: event.target.value });
	}
	// metoda pozwala na wydłanie formy
	zapiszZmiany(event) {
		alert("Wysłane: " + this.state.value);
		event.preventDefault(); // jeśli chcemy uniknąć automatycznego przeładowania strony po submicie
	}

	render() {
		return (
			<form onSubmit={this.zapiszZmiany}>
				<label>
					value
					<input type="text" value={this.state.value} onChange={this.zmienValue} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

// -----------------------------------------------------------

// ------------------------------------------------------
// --------- SPA - Single Page Application --------------
// ------------------------------------------------------
// Typ aplikacji lub strony internetowej, która w całości wczytuje się na raz i nie wymaga przeładowania strony. Cały kod (HTML, CSS, JS) ładowany jest na początku lub dodawany dynamicznie, zwykle w odpowiedzi na interakcje użytkownika.

// Zalety SPA:
// - szybsze ładowanie strony
// - mniejsze obciążenie serwera
// - brak przeładowań
// - mniej przesyłanych danych

// ------------------------------------------------------

// ----------------------------------
// --------- React Router -----------
// ----------------------------------

// Mimo, że w założeniu SPA ładujemy jedną stronę to często chcemy treść podzielić na wiele widoków. Chcemy dalej być w stanie pozwolić użytkownikowi wpisać konkretny adres do konkretnej strony i przekierować go pomiędzy stronami. Tu używamy biblioteki react-router

// npm install react-router-dom

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
	<Router>
		<div>
			<Header />
			// ustalamy path i przypisujemy go do komponentu
			<Route exact path="/" component={Home} />
			<Route path="/topics" component={Topics} />
		</div>
	</Router>
);

const Home = () => <h2>Home</h2>;
// możemy przekazywać zmienne i użyć ich w komponencie
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Topics = ({ match }) => (
	<div>
		<ul>
			<li>
				// tworzenie dynamicznych linkow
				<Link to={`${match.url}/components`}>Components</Link>
			</li>
		</ul>

		<Route path={`${match.path}/:id`} component={Topic} />
		<Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
	</div>
);
const Header = () => (
	<ul>
		<li>
			// Link do odpowiedniego widoku
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/topics">Topics</Link>
		</li>
	</ul>
);

export default App;

//  --------------------------------
//  ----------- Zadanie ------------
//  --------------------------------

// Dodaj do aplikacji pogodowej routing pozwalający na użycie nazwy miasta wpisanej w urlu. Na przykład '/city/warszawa', '/city/pionki' i ładuj odpowiednie miasto w zależności od urla

// -----------------------------------------------------------

//óć
