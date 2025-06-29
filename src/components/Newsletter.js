import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hyijy0w",
        "template_qqouo6l",
        { email },
        "U0TH5uYJWNLHzHt7V"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Subscription successful! Thank you for subscribing.");
          setEmail("");
        },
        (error) => {
          console.log(error.text);
          setStatus("An error occurred. Please try again.");
        }
      );
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br></br> & Never miss latest updates
            </h3>
            {status  && <Alert>{status}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
