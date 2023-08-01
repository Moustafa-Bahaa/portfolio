import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerceo from "../../Assets/Projects/Screenshot 2023-07-23 175510.png";
import youtubeClone from "../../Assets/Projects/Screenshot 2023-08-01 041553.png";
import cars from "../../Assets/Projects/cars.png";
import crud from "../../Assets/Projects/crud.png"
import passwordGenerator from "../../Assets/Projects/Screenshot 2023-07-24 125119.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerceo}
              isBlog={false}
              title="ecommerceo"
              description="Ecommerce app built with react.js, Primereact, and Redux toolkit."
              ghLink="https://github.com/Moustafa-Bahaa/ecommerceo-frontend"
              demoLink="https://commerceo-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtubeClone}
              isBlog={false}
              title="Youtube-clone"
              description="youtube clone is a web application built with react , material ui , axios , rapid api to simulate the real youtube app"
              ghLink="https://github.com/Moustafa-Bahaa/youtube-clone"
              demoLink="https://youtube-clone-tan-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="Crud application"
              description=" different crud operations using redux toolkit"
              ghLink="https://github.com/Moustafa-Bahaa/react-crud-toolkit"
              demoLink="https://react-crud-toolkit.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cars}
              isBlog={false}
              title="Car Agency"
              description="web application built with nextjs tailwind css headless ui typescript  "
              ghLink="https://github.com/Moustafa-Bahaa/car-agency"
              demoLink="https://car-agency-next.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordGenerator}
              isBlog={false}
              title="passwrod generator"
              description="small react app you can use it to generate password , you can specify password length password ingredients"
              ghLink="https://github.com/Moustafa-Bahaa/Password-Generator"
              demoLink="https://password-generator-ed9aosy30-moustafabahaa2060-gmailcom.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
