import React from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../../constants";

const Navigation = ({ uiStore }) => {
	return (
		<nav>
			<ul>
				<li>
					<Link to={ROUTES.home}>Home</Link>
				</li>
				<li>
					<Link to={ROUTES.watchlist}>Watchlist</Link>
				</li>
				<li>
					<Link to={ROUTES.login}>Login</Link>
				</li>
			</ul>
		</nav>
	);
};

export default inject("uiStore")(observer(Navigation));
