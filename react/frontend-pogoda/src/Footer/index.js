import React from "react";
import FooterLink from "./FooterLink";

const Footer = props => (
	<footer className="footer">
		<FooterLink name="Dom" />
		<FooterLink name="O mnie" />
		<FooterLink name="Ustawienia" />
		<button onClick={() => props.urodziny()}>Dodaj rok</button>
	</footer>
);

export default Footer;
