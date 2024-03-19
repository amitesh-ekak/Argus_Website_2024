import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Circle.css";
import Truck from "../Assets/tow-truck_3218441.png";
import Protocol from "../Assets/protocol_11725899.png";
import Cargo from "../Assets/due-diligence_12134546.png";
function Transport_Industry() {
  return (
    <div>
      <Container fluid>
        <Row className="text-center p-5 bg-black">
          <h1 className="text-center text-white">TRANSPORT INDUSTRY</h1>
        </Row>
        <Row>
          <div className="px-5 mt-5">
            <p>
              Computer vision is revolutionizing the transportation industry by
              offering real-time insights and enhancing overall efficiency
              across various sectors such as air freight, logistics, airlines,
              marine, trucking, road and rail systems, and transportation
              infrastructure. The surge in e-commerce demands more efficient
              logistics, prompting companies to utilize cutting-edge
              technologies like computer vision and AI to tackle diverse
              challenges. Implementing computer vision in transportation allows
              firms to optimize routes, cut costs, and ensure compliance with
              regulations. This technology has facilitated innovative solutions
              like automated vehicles, intelligent transportation systems, and
              smart logistics. Assert AI's computer vision algorithms enable
              real-time monitoring, tracking, and reduction of labor-intensive
              tasks, significantly boosting throughput and transforming the
              logistics Industry
            </p>
          </div>
        </Row>
        <Row>
          <Col lg={8}>
            <div className="pb-5 px-5">
              <h3 className="text-warning-emphasis ">Argus Will Help!</h3>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    Streamline inventory tracking by automatically recognizing
                    barcodes and SKUs, enhancing efficiency and accuracy through
                    automated processes for picking, packing, and sorting goods.
                  </p>
                </li>
                <li>
                  <p>
                    Utilize camera-based video analytics algorithms to identify
                    and track objects, providing real- time alerts for any
                    deviations detected.
                  </p>
                </li>
                <li>
                  <p>
                    Recognize vehicles automatically by reading license plates;
                    obtain up-to-date information on how trucks, forklifts, and
                    docks are being used
                  </p>
                </li>
                <li>
                  <p>
                    Implement facial recognition for employee monitoring, employ
                    hazard detection for events like fires and intrusions, and
                    enforce compliance with Personal Protective Equipment (PPE)
                    protocols.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <p>Video</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <div className="circle">
            <div className="inner_circle ">
              <img src={Cargo} className="micro"></img>
              <h5 className="text-center">CARGO INSPECTION AND SAFETY</h5>
              <div>
                <ul>
                  <li>Loading/ unloading movement monitoring </li>
                  <li>Detect cargo box damages</li>
                  <li>Observe motion and trace position</li>
                  <li>Detect shortfalls & inefficiencies</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={Truck} className="micro"></img>
              <h5 className="text-center">VEHICLE ASSISTENCE</h5>
              <div>
                <ul>
                  <li>Gate access control. </li>
                  <li>Truck turn around time</li>
                  <li>Accurate vehicle position assistance at dock .</li>
                  <li>Forklift collision warning.</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={Protocol} className="micro"></img>
              <h5 className="text-center">WORKFORCE SAFETY AND COMPLIANCE</h5>
              <div>
                <ul>
                  <li>Verify workers PPE , helmets, vests or gloves </li>
                  <li>Worker’s posture and potential ergonomics. </li>
                  <li>Unauthorized personnel access alert. </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Transport_Industry;
