import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData)
  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send("service_hyijy0w","template_qqouo6l", {
      name: formData.name, // dynamically populate these values
      email: formData.email,
      message: formData.message
    }, 'U0TH5uYJWNLHzHt7V')
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    }, (error) => {
      console.log(error.text);
      alert('An error occurred. Please try again.');
    });
  };

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
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="name"
                          placeholder="First Name"
                          value={formData.name}
                          onChange={onChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={onChange}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          value={formData.message}
                          onChange={onChange}
                        ></textarea>
                        <button type="submit">
                          <span>Send</span>
                        </button>
                      </Col>
                     
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
