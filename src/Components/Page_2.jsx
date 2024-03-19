import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page_2.css'
//import ManufactureHeader from './Assets/ManufactureHeader.mp4'

function Page_2() {
  return (
    <div className="bg-color_1">
      <Container text-center >
        <Row>
          <h1 className='text-center'>Who AM I ?</h1>
        </Row>
        <Row>
          <Col lg={8}>
            <p>On a daily basis, operational disruptions occur within factories due to lapses in routine maintenance checks, resulting in worker injuries due to lack of timely alerts. Instances such as undetected fires leading to significant damages are not uncommon due to the
              absence of continuous monitoring. However, these critical challenges can be effectively mitigated through the implementation of our AI-powered vigilant overseer, Argus.
            </p>
            <p>
            Argus is leading service offering by Ekak Innovations , specializing in AI-driven solutions for various industries . By harnessing the power of computer vision , machine learning , and artificial intelligence, Argus revolutionizes processes enabling businesses to achieve higher quality assurance, detect machine degradation , optimize team productivity.
            </p>
          </Col>
          <Col>
            <p ClassName='text-center'>Video</p>
          </Col>
        </Row>


      </Container>


    </div>
  )
}

export default Page_2
