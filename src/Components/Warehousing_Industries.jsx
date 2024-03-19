import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Circle.css";
import Inventory from "../Assets/clock_14038270.png";
import security from "../Assets/security_4514213.png";
import track from "../Assets/ecommerce_13135362.png";

function Warehousing_Industries() {
  return (
    <div>
      <Container fluid className="mb-5">
        <Row className="text-center p-5 bg-black">
          <h1 className="text-center text-white">WAREHOUSING INDUSTRY</h1>
        </Row>
        <Row>
          <h2 className="px-5 mt-5">Computer vision In Warehouses</h2>
        </Row>
        <Row>
          <div className="px-5 mt-3">
            <p>
              Managing warehouses becomes increasingly intricate and demanding
              over time. From frequent mishaps and shipment delays caused by
              human mistakes to repetitive duties and reliance on processes
              consuming valuable resources, warehouse managers encounter
              numerous hurdles. However, you can conquer these obstacles by
              enhancing the efficiency and cost-effectiveness of your warehouse
              through technological advancements like automation, specialized
              warehouse management systems, and the integration of artificial
              intelligence into supply chain management. Our warehouse
              management system not only ensures adherence to diverse SOPs but
              also mitigates the chances of unforeseen incidents, resulting in
              superior outcomes, decreased expenses, and amplified revenue.
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
                    Utilizes automated systems to conduct comprehensive quality
                    assurance protocols involves the identification and flagging
                    of defects, inconsistencies, or irregularities within
                    manufactured products or individual components.
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
              <img src={Inventory} className="micro"></img>
              <h5 className="text-center">INVENTORY MANAGEMENT</h5>
              <div>
                <ul>
                  <li>Capture and analyze product details.</li>
                  <li>Ensure availability of requires stock level.</li>
                  <li>Recognize, categorize and organize objects.</li>
                  <li>Identify misplaced items.</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={security} className="micro"></img>
              <h5 className="text-center">SECURITY SURVEILLANCE</h5>
              <div>
                <ul>
                  <li>Instantly identify accidents for prompt assistance. </li>
                  <li>
                    Detect and alert on fire , smoke spillage or any such
                    incident.
                  </li>
                  <li>Timely notify about warehouse asset requirement.</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={track} className="micro"></img>
              <h5 className="text-center">MONITORING AND TRACKING</h5>
              <div>
                <ul>
                  <li>
                    Accurately register arrival and departure of products.
                  </li>
                  <li>Monitor goods loaded forklift and trucks.</li>
                  <li>
                  Track asset Utilization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Warehousing_Industries;
