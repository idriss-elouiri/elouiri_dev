import { Container, Row, Col } from "react-bootstrap";
import AboutMeImg from "../assets/img/aboutMe.webp";

export const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div className="about-img">
              <img src={AboutMeImg} alt="Profile" />
            </div>
          </Col>
          <Col size={12} md={6}>
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                Hello! I'm <strong>Idriss Elouiri</strong>, a professional full-stack developer
                with a passion for creating dynamic, responsive, and visually appealing web applications.
                I specialize in using cutting-edge technologies like React, Node.js, and MongoDB
                to build scalable, user-friendly solutions that deliver real-world impact.
              </p>
              <p>
                With expertise spanning front-end design to back-end architecture, I thrive
                on solving complex challenges and delivering seamless user experiences. Whether
                it's crafting elegant UI/UX designs or optimizing server-side performance,
                I bring dedication, creativity, and technical excellence to every project.
              </p>
              <button onClick={() => window.location.href = "#projects"}>
                View My Work
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
