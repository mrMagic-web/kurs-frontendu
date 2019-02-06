import React from "react";

const callAlert = name => {
	alert(name);
};

const FooterLink = props => (
	<button onClick={() => callAlert(props.name)} className="footer-link">
		{props.name}
	</button>
);

export default FooterLink;
