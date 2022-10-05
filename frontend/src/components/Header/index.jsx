import React from 'react';
// NavLink correspond à "href" pour créer des ancres :
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header = () => {
	return (
		<header>
			<div className="header-logo">
				<img src={Logo} alt="logo Kasa" />
			</div>

			<nav >
				<ul className="navbar">
					<li className="navbar__link">
						<NavLink
							to="/"
							className={(link) =>
								link.isActive ? 'navbar__link--active' : null
							}
						>
							Accueil
						</NavLink>
					</li>

					<li className="navbar__link">
						<NavLink
							to="/about"
							className={(link) =>
								link.isActive ? 'navbar__link--active' : null
							}
						>
							A Propos
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
