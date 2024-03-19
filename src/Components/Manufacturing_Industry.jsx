import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Img from '../Assets/background_img.png'
import microscope from '../Assets/microscope_4758743.png'
import './Circle.css';
import Assurance from '../Assets/assurance_4157131.png'
import Warning from '../Assets/warning_13228401.png'
import Compliance from '../Assets/compliance_11094139.png'
import './Manufacturing_Industry.css'

// const Styles={
//     background: lightblue;
//     border-radius: 50%;
//     width: 100px;
//     height: 100px;
// }
function Manufacturing_Industry() {
  return (
    <div>
      <Container fluid className="mb-5">
        <Row className="text-center p-5 Manufacturing_bg">
          <h1 className="text-center Manufacturing_heading">MANUFACTURING INDUSTRY</h1>
        </Row>
        <Row>
          <p className="p-5 pb-3">
            The manufacturing industry is a diverse sector encompassing the
            creation, production, and assembly of physical goods across various
            domains and thus confronts numerous challenges arising from the
            complexity of its processes, including escalating production
            expenses, disruptions in the supply chain, machinery downtime, and a
            rise in worker fatalities. Swift resolution of these issues is
            essential. Our AI-based solution aims to address these challenges by
            pinpointing bottlenecks, refining processes, and bolstering overall
            efficiency.
          </p>
        </Row>
        <Row>
          <Col lg={8}>
            <div className="pb-2 px-5">
              <h3 className="Argus_help">Argus Will Help!</h3>
            </div>
            <div className="point_font">
              <ul>
                <li>
                  <p>
                    Utilizes automated systems to conduct comprehensive quality
                    assurance protocols involves the identification and flagging
                    of defects, inconsistencies, or irregularities within
                    manufactured products or individual components
                  </p>
                </li>
                <li>
                  <p>
                    Real- time insights into production , maintaining workforce
                    safety, enhancing overall efficiency.
                  </p>
                </li>
                <li>
                  <p>
                    Identify bottlenecks, optimize workflows and continuous
                    process improvement, consistently enhancing productivity.
                  </p>
                </li>
                <li>
                  <p>
                    Implement facial recognition and access control within
                    secure zones, automate packet tallying, and optimize dock
                    usage
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
              <img src={microscope} className="micro" ></img>
              <h6 className="Proactive_heading">Proactive  Machinery Monitoring </h6>
              <div className="Proactive_points">
                <ul>
                  <li>Detect machinery slowdown and downtime. </li>
                  <li>Monitor Machinery  Performance.</li>
                  <li>Irregular Movement Alert.</li>
                </ul>
              </div>
              
            </div>
            
              
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={Assurance} className="micro" ></img>
              <h5 className="Quality_heading">QUALITY ASSURANCE</h5>
              <div className="Quality_points">
                <ul>
                  <li>Detect defects  and anomalies. </li>
                  <li>Supply Chain optimization.</li>
                  <li>Classify and sort defects and inconsistencies.</li>
                  <li>Automated Quality  Checks.</li>
                </ul>
              </div>
              
            </div>
            
              
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={Compliance} className="micro" ></img>
              <h5 className="security_heading">SECURITY AND COMPLIANCE MONITORING </h5>
              <div className="security_points">
                <ul>
                  <li>Verify adherence to safety protocols. </li>
                  <li>Protect vital data through controlled access.</li>
                  <li>Detect PPE kit , gloves and other essential factory wearables.</li>
                </ul>
              </div>
              
            </div>
            
              
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={Warning} className="micro" ></img>
              <h5 className="emergency_heading">EMERGENCY ALERTS</h5>
              <div className="emergency_points">
                <ul>
                  <li>Notify authorities if workers approach dangerous machines. </li>
                  <li>Theft and leakage alerts.</li>
                  <li>Real-time alarm on fire, smoke or intrusion in factory</li>
                </ul>
              </div>
              
            </div>
            
              
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Manufacturing_Industry;
