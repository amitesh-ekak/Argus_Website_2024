import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Circle.css";
import Customer_Experience from "../Assets/career_7189845.png";
import Inventory_Management from "../Assets/process_3380999.png";
import Loss_Prevention from "../Assets/recession_7393588.png";
function Retail_Industry() {
  return (
    <div>
      <Container fluid>
        <Row className="text-center p-5 bg-black">
          <h1 className="text-center text-white">RETAIL INDUSTRY</h1>
        </Row>
        <Row>
          <h2 className="px-5 mt-5">Introduction To RetailTech</h2>
        </Row>
        <Row>
          <div className="px-5 mt-5">
            <p>
              The retail landscape is swiftly evolving, presenting fresh hurdles
              for businesses. Shifts in the world have significantly altered
              market dynamics and consumer habits. Unpredicted events and
              lifestyle changes have accelerated these challenges at an
              unprecedented pace. To thrive amidst increasing competition,
              retailers must embrace innovative retail solutions. AI-powered
              video analytics in retail is an area experiencing substantial
              growth. Our diverse range of retail solutions is designed to
              enhance customer assistance, eradicate performance- hindering
              mistakes, and efficiently handle inventory. Leveraging computer
              vision for the retail sector allows for real-time analysis of
              consumer behavior, enabling the transformation of the customer
              journey and overall experience.
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
                    Continuous analysis provides immediate awareness regarding
                    unattended customers, thereby improving their experience and
                    enhancing overall service quality in real-time.
                  </p>
                </li>
                <li>
                  <p>
                    Utilizing object recognition, computer vision optimizes
                    inventory, minimizing shortages or excess stock for
                    efficient retail management.
                  </p>
                </li>
                <li>
                  <p>
                    Identify the busiest times for shopping by observing the
                    daily influx of customers, helping to understand when foot
                    traffic peaks during the day.
                  </p>
                </li>
                <li>
                  <p>
                    Implement facial recognition and access control to track
                    employee attendance and arranges the data systematically.
                  </p>
                </li>
                <li>
                  <p>
                    Identify uncommon or suspicious activity to prevent theft
                    and minimize losses.
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
              <img src={Customer_Experience} className="micro"></img>
              <h5 className="text-center">ENHANCING CUSTOMER EXPERIENCE</h5>
              <div>
                <ul>
                  <li>Customer shopping behavior tracing.</li>
                  <li>Queue management and optimizing customer flow</li>
                  <li>Store layout optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={Inventory_Management} className="micro"></img>
              <h5 className="text-center">INVENTORY MANAGEMENT</h5>
              <div>
                <ul>
                  <li>Visual inventory level recognition.</li>
                  <li>Monitor shelf confition.</li>
                  <li>Aid stock replenishment , preventing stockouts</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <div className="circle">
            <div className="inner_circle ">
              <img src={Loss_Prevention} className="micro"></img>
              <h5 className="text-center">SECURITY AND LOSS PREVENTION</h5>
              <div>
                <ul>
                  <li>Social distancing compliances </li>
                  <li>Quick alert on shoplifting and theft. </li>
                  <li>Detect customer suspicious behavior.</li>
                </ul>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Retail_Industry;
