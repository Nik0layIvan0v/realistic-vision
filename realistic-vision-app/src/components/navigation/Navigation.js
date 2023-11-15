import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Navigation({ expand, lang, ...app }) {
  return (
    <Navbar
      className="bg-body-transparent bg-white"
      expand={expand}
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand>
          <Link className="nav-link" to={`/`}>
            {app.logo ? (
              <img
                alt="realistic vision logo"
                src={app.logo}
                width="30"
                height="30"
                className="d-inline-block align-top mr-3"
              />
            ) : null}
            <p className="d-inline h5"> {app.title}</p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <p className="d-inline h5">{app.offcanvasNavbarLabel}</p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {app.navlinks[lang].map((navLink, index) => (
                <Link key={index} className="nav-link" to={navLink.link}>
                  {navLink.title}
                </Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
