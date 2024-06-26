import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Game Developer", "Game Designer", "3D modeller"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">Welcome to my Portfolio</span>
              <div className="text-animation">
                <h1>
                  {`Hi! I'm Donny,`}{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <p>
                "I am currently pursuing a Bachelor of Digital Screens degree
                with a major in Game Development at the University of
                Canterbury. Through my studies, I am gaining a strong foundation
                in the technical and creative aspects of game design and
                development. My coursework covers topics such as programming, 3D
                modeling, animation, level design, and ethical game design. I
                have worked on several game projects, both individually and
                collaboratively, honing my skills in Unity, Blender and
                Photoshop."
              </p>
              <button onClick={() => console.log("connect")}>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};