import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { icon: <FaHtml5 className="icon orange" />, name: "HTML" },
    { icon: <FaCss3Alt className="icon blue" />, name: "CSS" },
    { icon: <FaJs className="icon yellow" />, name: "JavaScript" },
    { icon: <FaReact className="icon lightblue" />, name: "React" },
    { icon: <SiNextdotjs className="icon black" />, name: "Next.js" },
    { icon: <SiTailwindcss className="icon teal" />, name: "TailwindCSS" },
    { icon: <FaNodeJs className="icon green" />, name: "Node.js" },
    { icon: <SiExpress className="icon gray" />, name: "Express.js" },
    { icon: <SiMongodb className="icon darkgreen" />, name: "MongoDB" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>My Professional Skills</h2>
          <p>
            A skilled full-stack developer with expertise in building robust web
            applications using the MERN stack.
          </p>
        </div>
        <div className="skills-slider">
          <Carousel
            responsive={responsive}
            infinite={true}
            className="carousel"
          >
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="icon-container">{skill.icon}</div>
                <h5>{skill.name}</h5>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <img
        className="background-image"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
