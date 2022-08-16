import React from "react";
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const Contact = () => {
  //   const formInitialDetails = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     message: "",
  //   };
  //   const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  //   const [status, setStatus] = useState({});
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pdike1b",
        "template_px93vt3",
        refForm.current,
        "LvIuQ_JHS_onQm2a1"
      )
      .then(
        () => {
          Swal.fire("Message Successfully Sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  //   const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value,
  //     });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setButtonText("Sending...");
  //     let response = await fetch("http://localhost:5000/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json;charset=utf-8",
  //       },
  //       body: JSON.stringify(formDetails),
  //     });
  //     setButtonText("Send");
  //     let result = await response.json();
  //     setFormDetails(formInitialDetails);
  //     if (result.code == 200) {
  //       setStatus({ succes: true, message: "Message sent successfully" });
  //     } else {
  //       setStatus({
  //         succes: false,
  //         message: "Something went wrong, please try again later.",
  //       });
  //     }
  //   };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={refForm} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="First Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_lname"
                          placeholder="Last Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Email Address"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone No."
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {/* {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )} */}
                    </Row>
                  </form>
                  {/* <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                      <li className="half">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </li>
                      <li className="half">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </li>
                      <li>
                        <textarea
                          name="message"
                          placeholder="Message"
                          required
                        ></textarea>
                      </li>
                      <li>
                        <input
                          type="submit"
                          className="flat-button"
                          value="SEND"
                        />
                      </li>
                    </ul>
                  </form> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
