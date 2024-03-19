import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import manufacturing_factory from '../Assets/Manufacturing_Factory .jpg'
import Warehouse from '../Assets/Warehouse.jpg'
import Construction from '../Assets/Construction.jpg';
import Retail from '../Assets/Retail.jpg'
import Logistics from '../Assets/Logistics.jpg'
import './Page_5.css'
const divStyle = {
    width:'300px'
};
function Page_5() {
  return (
    <div className="bg-color pb-5">
        <Container text-center  >
            <Row className="">
                <h1 className='text-center mt-5 Industry_focus_on '>INDUSTRIES WE FOCUS ON</h1>
            </Row>
            <Row className="mt-5">
                <Col lg={4} className="d-flex justify-content-center text-center">
                    <div style={divStyle}>
                        <img src={manufacturing_factory} class="d-block w-100 " alt="..."/>
                        <p className="paragraph">Manufacturing Factory</p>
                    </div>
                </Col>
                <Col lg={4} className="d-flex justify-content-center text-center">
                    <div style={divStyle}> 
                        <img src={Warehouse} class="d-block w-100" alt="..."/>
                        <p className="paragraph">Warehouse</p>
                    </div>
                </Col>
                <Col lg={4} className="d-flex justify-content-center text-center">
                    <div style={divStyle}>
                        <img src={Construction} class="d-block w-100" alt="..."/>
                        <p className="paragraph">Construction</p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={6} className="d-flex justify-content-center text-center">
                    <div style={divStyle}>
                        <img src={Logistics} class="d-block w-100" alt="..."/>
                        <p className="paragraph">Logistics</p>
                    </div>
                </Col>
                <Col lg={6} className="d-flex justify-content-center text-center">
                    <div style={divStyle}>
                        <img src={Retail} class="d-block w-100" alt="..."/>
                        <p className="paragraph">Retail</p>
                    </div>
                </Col>
            </Row>
            

        </Container>
      
    </div>
  )
}

export default Page_5
