import React                             from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


export default function MainNavigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand">
					Spot A Room
				</span>
			</Link>

			<div className="navbar col justify-content-end ml-2 d-none d-lg-flex" id="navbarSupportedContent">
				<ul className="nav">
					<li className="nav-item">
						<Link className="nav-link active" to="/about">The Company</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link active" to="/how-we-work">How We Work</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link active" to="/contact">Contact Us</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

