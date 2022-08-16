import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg6 from "../assets/img/project-img6.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Crypto Tracker",
      imgUrl: projImg5,
      live: "https://sandeep-cryptotracker-f076ca.netlify.app/",
      code: "https://github.com/Sandeep16ibm/cryptoTracker",
    },
    {
      title: "Exercises Fitness App ",
      imgUrl: projImg4,
      live: "https://sandeep-exercise-app.netlify.app/",
      code: "https://github.com/Sandeep16ibm/exercisesApp",
    },
    {
      title: "FeedbackUI",
      imgUrl: projImg6,
      live: "https://sandeep-feedback-ui.netlify.app/",
      code: "https://github.com/Sandeep16ibm/Inshorts-News-Portal",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    While learning, I always love to create projects as a way to
                    improve my knowledge on algorithmic processes and design
                    patterns. <br></br>Here are some random projects from my
                    catalogue to scroll through. Do checkout The "LIVE" for Demo
                    and "CODE" for the Source Codes to individual projects. 🧡
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
