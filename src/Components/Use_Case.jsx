import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import space from "../Assets/Space.png";
import Construction from "../Assets/Construction.png";
import Warehouse from "../Assets/Warehouse.png";
import Retail from "../Assets/Retail.png";

function Use_Case() {
  return (
    <div>
      <Container fluid>
        <Row>
          <div>
            <h1 className="text-center mt-5">
              Use Cases In Different Industries
            </h1>
          </div>
        </Row>
        <Row className="mt-5">
          <Col lg={4}>
            <div>
              <img src={space}></img>
            </div>
          </Col>
          <Col lg={8}>
            <div>
              <h3 className="text-left">Factory Space</h3>
            </div>
            <div>
              <ul>
                <li>
                  Automated Quality assurance by detecting defects,
                  inconsistencies, or anomalies in products or components
                </li>
                <li>
                  Monitor machine performance and detect sign of degradation
                </li>
                <li>
                  Gain insights into production line performance and product
                  quality by analyzing visual data
                </li>
                <li>Automatically classify defect and sort in manufacturing</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={8}>
            <div>
              <h3 className="text-left">Construction Industry</h3>
            </div>
            <div>
              <ul>
                <li>Real-time review of those not wearing gear or helmets.</li>
                <li>
                  Spotting intruder and unsafe activities, enhancing site
                  security
                </li>
                <li>Tracking the progress of projects</li>
                <li>Tracing the movement of men and material.</li>
                <li>
                  Utilizes operational insights to compare actual construction
                  to plans and designs
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <img src={Construction}></img>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={4}>
            <div>
              <img src={Warehouse}></img>
            </div>
          </Col>
          <Col lg={8}>
            <div>
              <h3 className="text-left">Warehouses</h3>
            </div>
            <div>
              <ul>
                <li>
                  Tracking the movement of goods and vehicles inside the
                  warehouse
                </li>
                <li>
                  Detecting and reporting unauthorized persons right away,
                  preventing theft.
                </li>
                <li>Inspect default and damages in picking and packing.</li>
                <li>
                  Examine the stock to see if it needs to be replenished or is
                  still available.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={8}>
            <div>
              <h3 className="text-left">Retail Industry</h3>
            </div>
            <div>
              <ul>
                <li>
                  Taking employee attendance and identifying unauthorized
                  individuals
                </li>
                <li>
                  Tracking daily customer flow to identify peak shopping periods
                </li>
                <li>
                  Monitoring employees in real-time to determine whether they
                  are attending the customers
                </li>

                <li>Identify suspicious behaviour ,such as lifting.</li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <img src={Retail}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Use_Case;
