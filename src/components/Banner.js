import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner-avatar-face.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "CS Student", "Software Developer", "Game Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Jade!`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "CS Student", "Software Develper", "Game Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Jade is a Senior Computing major at Texas A&M University. She aspires to be a full stack developer and has expereince with back-end, front-end, and game design. Her projects are below.</p>
                  <button onClick={() => console.log('connect')}>Contact Me <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}