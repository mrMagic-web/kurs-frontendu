//   -----------------------
//   -------- Formy --------
//   -----------------------
// W HTML elementy typu <input>, <textarea> i <select> utrzymują swój własny stan i są automatycznie zmieniane. W React.js przypisujemy wartość pul valueowych w stanie komponentu a zmieniamy używając setState().

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		// ustalamy wartość początkową
		this.state = { value: "" };
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
