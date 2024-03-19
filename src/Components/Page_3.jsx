import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Face_Recogniton from "../Assets/Face_Recognition.jpg";
import Real_Time_Monitoring from "../Assets/Real_Time_Monitoring .jpg";
import Predictive_maintainence from "../Assets/Predictive_maintainence.jpg";
import Automated_Safety_checks from "../Assets/Automated_Safety_checks.jpg";
import Increase_Safety from "../Assets/Workplace_Safety.png";
import Reduce_Downtime from "../Assets/Reduce_Downtime.png";
import Optimize_Process from "../Assets/Optimize_Process.png";
import './page_2.css'
const divStyle = {
  width: "300px"
};
const textStyle= {
  width:"200px"
};
function Page_3() {
  return (
    <div>
      <Container fluid className="body">
        <Row>
          <Col className="m-5 d-flex justify-content-center">
            <Card style={{ width: "25rem"}}>
              <Card.Img variant="top" src={Face_Recogniton} />
              <Card.Body className="card_body">
                <Card.Title className="font_heading">Facial Recognition</Card.Title>
                <Card.Text className="font">
                  With the aid of AI-based video analytics, our facial
                  recognition solution significantly enhances real-time
                  identification and authentication to improve anti- spoofing
                  capabilities for a variety of applications, including employee
                  attendance tracking and monitoring productivity, and
                  identifying individuals on a blacklist. Facial Recognition has
                  many uses, such as access control, security, and
                  customization.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-5 d-flex justify-content-center">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={Real_Time_Monitoring} />
              <Card.Body className="card_body">
                <Card.Title className="font_heading">Real Time Monitoring</Card.Title>
                <Card.Text className="font">
                  Utilizing a confluence of data amalgamation, algorithmic
                  rules, and predictive analytics in real- time, augmenting the
                  analytical framework to expedite informed decision-making for
                  operational procedures . Providing the Insights into your
                  processes in real-time , tracking the activities of workers
                  and functioning of the machines.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="m-5 d-flex justify-content-center">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={Predictive_maintainence} />
              <Card.Body className="card_body">
                <Card.Title className="font_heading">Predictive Maintainence</Card.Title>
                <Card.Text className="font">
                  A resilient AI framework is in place to identify, detect, and
                  address failures by continuously monitoring in real-time,
                  equipped with automated alerts that can be customized.
                  Predictive Maintenance aids in streamlining operations and
                  reducing downtime by proactively averting potential
                  disruptions in operations, processes, services, or systems.
                  Regularly monitoring the health and operation state of
                  machinery , equipment and materials , determining possible
                  defect to fix it before the result in failure.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="m-5 d-flex justify-content-center">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={Automated_Safety_checks} />
              <Card.Body className="card_body">
                <Card.Title className="font_heading">Automated Safety Checks</Card.Title>
                <Card.Text className="font">
                  Through advanced algorithms, our system actively monitors and
                  identifies safety protocols, prompting timely interventions to
                  maintain a safe and secure workplace environment. Utilizing
                  cutting-edge computer vision algorithms in real-time enables
                  the detection of safety gear, equipment usage, and forklift
                  presence, allowing for immediate alerts when non- compliance
                  or potential danger is detected, preventing hazards and
                  accidents, ensuring a secure working environment that complies
                  with safety standards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="bg-color_1">
          <Col>
           <div className="text-center">
            <img
                src={Increase_Safety}
                className="rounded"
                style={divStyle}
                alt="..."
              />
           </div>
            <div>
              <h2 className="text-center">Increase Safety</h2>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                src={Reduce_Downtime}
                className="rounded"
                style={divStyle}
                alt="..."
              />
            </div>
            <div>
              <h2 className="text-center">Reduce Downtime</h2> 
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img
                src={Optimize_Process}
                className="rounded"
                style={divStyle}
                alt="..."
              />
            </div>
            <div>
              <h2 className="text-center">Optimize Process</h2>
            </div> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Page_3;
