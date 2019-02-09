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
