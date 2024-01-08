import office from "../assets/backgrounds/office-background.jpg";
import "./Pages.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function ContactUsPage() {
  const [formState, setFormState] = useState({});
  const handleChange = (event) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div
      className="left-half-black"
      style={{
        background: `url(${office}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "fill",
        height: "100vh",
        padding: 0,
        margin: 0,
        position: "relative",
      }}
    >
      <div
        className="text-light row"
        style={{
          position: "absolute",
          top: "40px",
          left: "12px",
          padding: "0px",
          fontFamily: "fantasy",
          fontSize: "15px",
          width: "100%",
          height: "auto",
          zIndex: 1,
        }}
      >
        <Form
          method="GET"
          action={`mailto:martiEmail@realistic-vision.com?subject=${formState.subject}&body=${formState.message}`}
          enctype="text/plain"
          className="col-12 col-lg-6 col-sm-12 col-md-6 mt-0"
        >
          <Form.Group className="mb-3 mt-3">
            <h1 className="text-center">FIND US</h1>
            <hr className="w-25 m-auto" />
          </Form.Group>
          <FloatingLabel label="Name*" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name*"
              required
              className="bg-dark text-light"
              name="name"
              value={formState.name ?? ""}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label="Email Address*" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email*"
              required
              className="bg-dark text-light"
              name="email"
              value={formState.email ?? ""}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label="Subject" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Subject"
              required
              className="bg-dark text-light"
              name="subject"
              value={formState.subject ?? ""}
              onChange={handleChange}
            />
          </FloatingLabel>
          <FloatingLabel label="Message*" className="mb-3">
            <Form.Control
              as="textarea"
              required
              placeholder="Message"
              rows={50}
              className="bg-dark text-light"
              style={{ height: "134px", resize: "none" }}
              name="message"
              value={formState.message ?? ""}
              onChange={handleChange}
            />
          </FloatingLabel>
          <Form.Group className="mb-3 d-flex justify-content-center">
            <Button type="submit" variant="dark border" className="w-75 ">
              SEND
            </Button>
          </Form.Group>
        </Form>
        <div className="col-12 col-lg-6 col-sm-12 col-md-6 mt-0">
          <div className="col-12 mt-3 text-center">
            <h1 className="text-center">OFFICE LOCATION</h1>
            <hr className="w-25 m-auto mb-3" />
            <ul style={{ listStyleType: "none" }}>
              <li>1 Druzba str, Sofia bulgaria</li>
              <li>office@inceptbg.com</li>
              <li>+35988897987987</li>
            </ul>
          </div>
          <div className="col-12 mt-3 text-center">
            <h1 className="text-center">OPENING HOURS</h1>
            <hr className="w-25 m-auto mb-3" />
            <ul style={{ listStyleType: "none" }}>
              <li>Mon - Fri: 7am - 10pm</li>
              <li>Saturday: 8am - 10pm</li>
              <li>Sunday: 8am - 11pm</li>
            </ul>
          </div>
          <div className="col-12 mt-3 mb-3 text-center d-flex justify-content-around">
            <FontAwesomeIcon size="3x" icon={faFacebook} />
            <FontAwesomeIcon size="3x" icon={faLinkedin} />
            <FontAwesomeIcon size="3x" icon={faFacebookMessenger} />
            <FontAwesomeIcon size="3x" icon={faYoutube} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
