import React from 'react';

export default function MainNavigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<span className="navbar-brand">Spot A Room</span>
			<div className="navbar col justify-content-end ml-2 d-none d-lg-flex" id="navbarSupportedContent">
				<ul className="nav">
					<li className="nav-item">
						<a className="nav-link active" href="#">The Company</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">How We Work</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Contact Us</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

