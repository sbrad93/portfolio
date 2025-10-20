import { Card } from "react-bootstrap";
import {
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaLocationArrow,
} from "react-icons/fa";
import { about } from "../../data/about";
import profileImg from "../../img/profile.jpg";
import "./About.css";

const About = () => {
  const {
    intro,
    name,
    description,
    city,
    location,
    resume,
    github,
    githubHandle,
    linkedin,
    linkedinHandle,
  } = about;

  return (
    <section className="about">
      <div>
        <h1>
          {intro} <span className="my-name">{name}</span>
        </h1>
        <p>{description}</p>
      </div>

      <Card className="profile">
        <Card.Img variant="top" className="profile-img" src={profileImg} />

        <Card.Body className="about-links">
          <Card.Link className="link-item" href={location} target="_blank">
            <FaLocationArrow className="icon" />
            <span>{city}</span>
          </Card.Link>

          <Card.Link className="link-item" href={github} target="_blank">
            <FaGithub className="icon" />
            <span>{githubHandle}</span>
          </Card.Link>

          <Card.Link className="link-item" href={linkedin} target="_blank">
            <FaLinkedinIn className="icon" />
            <span>{linkedinHandle}</span>
          </Card.Link>

          <Card.Link className="link-item" href={resume} target="_blank">
            <FaDownload className="icon" />
            <span>Resume</span>
          </Card.Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default About;
