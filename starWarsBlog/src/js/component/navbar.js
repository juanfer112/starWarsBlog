import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 flex-column">
			<Link to="/">
				<img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" />
			</Link>
			<div className="row  mt-5">
				<div className="col-4">
					<Link to="/people">
						<span className="mb-0 h3 text-secondary">People</span>
					</Link>
				</div>

				<div className="col-4">
					<Link to="/vehicles">
						<span className="mb-0 h3 text-secondary">Vehicles</span>
					</Link>
				</div>
				<div className="col-4">
					<Link to="/planets">
						<span className="mb-0 h3 text-secondary">Planets</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};
