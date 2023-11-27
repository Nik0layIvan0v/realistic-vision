import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

function Navigation({
  expand,
  onLangChange,
  navlinks,
  logo,
  title,
  offcanvasNavbarLabel,
}) {
  return (
    <Navbar
      className="bg-body-transparent bg-transparent m-0 p-0 w-100"
      height={"33px"}
      expand={expand}
      sticky="top"
    >
      <Container fluid className="w-100">
        <Navbar.Brand>
          <Link className="nav-link" to={`/`}>
            {logo ? (
              <img
                alt="realistic vision logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top mr-3"
              />
            ) : null}
            <p className="d-inline h3 nav-title text-light">{title}</p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand} basic-navbar-nav rounded bg-white border border-0`}
        >
          <FontAwesomeIcon icon={faBars} color="white" />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand} basic-navbar-nav`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <p className="d-inline h5 nav-title">{offcanvasNavbarLabel}</p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center shadow">
              {navlinks.map((navLink, index) => (
                <Link
                  key={index}
                  className="nav-link display-1 text-light"
                  to={navLink.link}
                >
                  <i className="fa-solid fa-user" />
                  {navLink.title}
                </Link>
              ))}
              <div className="nav-link d-flex">
                <img
                  onClick={onLangChange}
                  name={"bg"}
                  className="flex-grow-1 pe-1 align-items-center btn"
                  src="https://flagsapi.com/BG/shiny/24.png"
                />
                <img
                  onClick={onLangChange}
                  name={"en"}
                  className="flex-grow-1 pe-1 align-items-center btn"
                  src="https://flagsapi.com/US/shiny/24.png"
                />
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
