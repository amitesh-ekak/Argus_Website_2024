import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Circle.css";
import CCTV from "../Assets/cctv_196751.png";
import check from "../Assets/check_7613035.png";
import task from "../Assets/task_4169130.png";
import './Construction_Industry.css'
function Construction_Industry() {
  return (
    <div>
      <Container fluid className="mb-5">
        <Row className="text-center p-5 Construction_bg">
          <h1 className="Construction_heading">CONSTRUCTION INDUSTRY</h1>
        </Row>
        <Row>
          <h2 className="px-5 mt-5 technology_heading">Technology for construction site</h2>
        </Row>
        <Row>
          <div className="px-5 mt-3">
            <p>
              The construction industry, a colossal domain encompassing
              extensive spatial demands, a formidable labor force, substantial
              financial investments, and intricate machinery, grapples
              persistently with elevated risks of worker fatalities. This
              sector, despite its scale and economic significance, faces ongoing
              challenges in balancing productivity with safety concerns. The
              advent of Edge IoT technology heralds a paradigm shift, offering
              the construction industry a pathway to revolutionize its
              operations. Our bespoke computer vision-based camera system,
              purpose-built for construction environments, stands as a testament
              to this evolution. Beyond enhancing operational efficiency, it
              serves as a critical solution to the industry's safety conundrum.
              Providing real-time insights and proactive measures, it promises
              to mitigate risks, prevent accidents, and establish a safer work
              environment. This innovation represents a pivotal step toward
              reshaping the industry's landscape, positioning it at the
              forefront of technological advancement and safety standards.
            </p>
          </div>
        </Row>
        <Row>
          <Col lg={8}>
            <div className="pb-3 px-5">
              <h3 className="Argus_help">Argus Will Help!</h3>
            </div>
            <div className="Construction_point_font">
              <ul>
                <li>
                  <p>
                    Empowering real-time hazard identification, ensuring
                    adherence to safety protocols, and promptly detecting unsafe
                    behaviors or conditions for enhanced on-site safety.
                  </p>
                </li>
                <li>
                  <p>
                    Enhancing site security by offering continuous surveillance
                    to deter theft, vandalism, and unauthorized entry onto
                    construction premises.
                  </p>
                </li>
                <li>
                  <p>
                    Optimizing material, equipment, and supply tracking for
                    enhanced efficiency and management.
                  </p>
                </li>
                <li>
                  <p>
                    Identifying defects or issues in structures early on,
                    allowing for timely intervention and rectification.
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
              <img src={CCTV} className="micro"></img>
              <h5 className="site_surveillance_heading">SITE SURVEILLANCE</h5>
              <div className="site_surveillance_points">
                <ul>
                  <li>Defect and design deviation detection.</li>
                  <li>
                    Alert on identifying potential safety hazards and instant
                    breakdown alert.
                  </li>
                  <li>Machinery movement tracking .</li>
                  <li>
                    Facial recognition for access control in specific site
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={task} className="micro"></img>
              <h5 className="resource_management_heading">RESOURCE MANAGEMENT</h5>
              <div className="resource_management_points">
                <ul>
                  <li>Survey , mapping & monitoring material flow . </li>
                  <li>Real- time insights into project progress &timeline.</li>
                  <li>Tracking workers activity and movement ..</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={check} className="micro"></img>
              <h5 className="safety_compliance_heading">SAFETY COMPLIANCE</h5>
              <div className="safety_compliance_points">
                <ul>
                  <li>Verify helmet and life jacket</li>
                  <li>Alert on identifying potential safety hazards </li>
                  <li>Theft or vandalism real-time notification. </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Construction_Industry;
