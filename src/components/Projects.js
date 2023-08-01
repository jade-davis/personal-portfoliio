import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-2.png";
import projImg3 from "../assets/img/project-3.png";
import projImg4 from "../assets/img/project-4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Custom Shell",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Tormenta Manor",
      description: "Game Design",
      imgUrl: projImg2,
    },
    {
      title: "Dijkstra's Algorithm",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Recipe Generator",
      description: "Design & Development",
      imgUrl: projImg4,
    }
  ];

  const desprojects = [
    {
      title: "Bachlorette",
      description: "Development",
      imgUrl: projImg1,
    },
    {
      title: "Tormenta Manor",
      description: "Game Design",
      imgUrl: projImg2,
    },
    {
      title: "Dijkstra's Algorithm",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Recipe Generator (Coming Soon!)",
      description: "Design & Development",
      imgUrl: projImg3,
    }
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                      <Row>
                        {
                          desprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}