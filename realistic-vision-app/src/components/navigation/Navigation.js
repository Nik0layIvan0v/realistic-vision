import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Navigation({
	expand,
	onLangChange,
	navlinks,
	logo,
	title,
	offcanvasNavbarLabel,
	navLinksHide,
}) {
	const navigate = useNavigate();
	const [showOffcanvas, setShowOffcanvas] = useState(false);

	return (
		<Collapse in={navLinksHide}>
			<Navbar
				className="m-0 pl-4 pr-4 pt-1 mb-1 w-100 ml-3"
				height={'48px'}
				expand={expand}
				fixed={'top'}
				aria-expanded={navLinksHide}
			>
				<Container fluid>
					<Link
						className="nav-title"
						onClick={() => {
							navlinks.map(
								(navlink) => (navlink.isActive = false)
							);
							let navlink = navlinks.find(
								(navlink) => (navlink.link = '/')
							);

							navlink.isActive = true;
						}}
						to={`/`}
					>
						{/* <div className="d-inline">
								{logo ? (
									<img
										alt="realistic vision logo"
										src={logo}
										width="32"
										height="32"
									/>
								) : null}
							</div> */}
						{title}
					</Link>
					<Navbar.Toggle
						onClick={() => setShowOffcanvas(true)}
						aria-controls={`offcanvasNavbar-expand-${expand} basic-navbar-nav rounded border border-0`}
					>
						<FontAwesomeIcon
							icon={faBars}
							color="white"
							size="xl"
						/>
					</Navbar.Toggle>
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand} basic-navbar-nav`}
						placement="end"
						restoreFocus={false}
						show={showOffcanvas}
						onHide={() => setShowOffcanvas(false)}
					>
						<Offcanvas.Header closeButton>
							<div className="nav-title">
								{offcanvasNavbarLabel}
							</div>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
								{navlinks.map((navLink, index) => (
									<Link
										key={index}
										className={`nav-link ${
											navLink.isActive ? 'fw-bold' : ''
										}`}
										to={navLink.link}
										onClick={(event) => {
											event.preventDefault();
											navigate(navLink.link);
											setShowOffcanvas(false);
											navlinks.map(
												(navlink) =>
													(navlink.isActive = false)
											);
											navLink.isActive = true;
										}}
									>
										{navLink.title}
									</Link>
								))}
								<div className="d-flex">
									<img
										onClick={(event) => {
											event.preventDefault();
											onLangChange(event);
											setShowOffcanvas(false);
										}}
										name={'bg'}
										className="flex-grow-1 pe-1 align-items-center btn"
										src="https://flagsapi.com/BG/shiny/24.png"
										alt="bg flag"
									/>
									<img
										onClick={(event) => {
											event.preventDefault();
											onLangChange(event);
											setShowOffcanvas(false);
										}}
										name={'en'}
										className="flex-grow-1 pe-1 align-items-center btn"
										src="https://flagsapi.com/US/shiny/24.png"
										alt="en flag"
									/>
								</div>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</Collapse>
	);
}

export default Navigation;
