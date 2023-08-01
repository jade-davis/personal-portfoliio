import meter1 from "../assets/img/meter1.svg";
import skills1 from "../assets/img/skill-1.svg";
import skills2 from "../assets/img/skill-2.svg";
import skills3 from "../assets/img/skill-3.svg";
import skills4 from "../assets/img/skills-icon-4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/banner.png"

export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };



    return (
        <section className="skill" id="skills">
            <div className="container">
            <h2>Skills</h2>
              <p>Through personal projects, online courses, and her university classes, Jade has gained valuable skills.<br></br> She has about three years of expirence with building programs.</p>
                <div className="row">
                    <div className="col-4">
                        <div className="skill-bx1 wow zoomIn">
                        <div className="item">
                              <img src={skills3} alt="Image" />
                              </div>

          
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="skill-bx1 wow zoomIn">
                        <div className="item">
                              <img src={skills2} alt="Image" />
                              </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="skill-bx1 wow zoomIn">
                        <div className="item">
                              <img src={skills1} alt="Image" />
                              </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
      )
    }