import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
// import { Menu } from "semantic-ui-react";
// import semantic from 'semantic-ui';

export const Navbar = () => {
	return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a href="/" className="siteTitle">Logo here</a>
				<ul>
					<li className="active">
						<a href="/Home">Home</a>
					</li>
					<li className="inactive">
						<a href="/About">About</a>
					</li>
					<li className="inactive">
						<a href="/Services">Services</a>
					</li>
					<li className="inactive">
						<a href="/Contact">Contact</a>
					</li>
				</ul>
			</div>
        </nav>
    )
}

export default Navbar
		// <Navbar expand="lg" className="bg-body-tertiary">
		// 	<Container>
		// 	<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		// 	<Navbar.Toggle aria-controls="basic-navbar-nav" />
		// 	<Navbar.Collapse id="basic-navbar-nav">
		// 		<Nav className="me-auto">
		// 		<Nav.Link href="#home">Home</Nav.Link>
		// 		<Nav.Link href="#link">Link</Nav.Link>
		// 		<NavDropdown title="Dropdown" id="basic-nav-dropdown">
		// 			<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		// 			<NavDropdown.Item href="#action/3.2">
		// 			Another action
		// 			</NavDropdown.Item>
		// 			<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		// 			<NavDropdown.Divider />
		// 			<NavDropdown.Item href="#action/3.4">
		// 			Separated link
		// 			</NavDropdown.Item>
		// 		</NavDropdown>
		// 		</Nav>
		// 	</Navbar.Collapse>
		// 	</Container>
// 		// </Navbar>		
// 	);
// };
