import React from "react";
import Loader from "react-loader-spinner";

const Loading = props => (
	<div className="loading">
		<Loader type="Hearts" color="#FFFFFF" height="100" width="100" />
	</div>
);

export default Loading;
