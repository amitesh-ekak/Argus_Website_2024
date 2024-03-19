import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fire_1 from '../Assets/fire_1.png'
import fire_2 from '../Assets/fire_2.jpg'
import resources from '../Assets/resources.jpg'
import resources_2 from '../Assets/resources_2.jpg'
import safety_1 from '../Assets/Safety_1.jpg'
import safety_2 from '../Assets/Safety_2.jpg'
import './Page_4.css'

function Page_4() {
  return (
    <div>
      <Container text-center>
            <Row>
                <Col>
                  <div id="carouselExampleAutoplaying" class="carousel slide resource" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={resources} className="d-flex w-100 " alt="..."/>
                      </div>
                      <div class="carousel-item">
                        <img src={resources_2} className="d-block w-100 " alt="..."/>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </Col>
                <Col>
                <div class="mt-5  text-center">
                <p >Assist you in  bringing the
                  transition from increased
                  resource waste to improved
                  resource management ,
                  facilitating smooth work flow
                  that will change the industry for
                  better.
                </p>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div class="mt-5 text-center">
                 <p>By thoroughly examining
                   incident and promptly
                   informing the
                   appropriate person it
                   helps  you in receiving
                   early warnings of
                   potential dangers,
                   equipment breakdown
                   and manufacturing
                   defects , lowering your
                   cost and  safeguarding
                   your resources.
                   </p>
                </div>
                </Col>
                <Col>
                  <div id="carouselExampleAutoplaying_2" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner mt-5 ">
                        <div class="carousel-item active">
                          <img src={fire_1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                          <img src={fire_2} class="d-block w-100" alt="..."/>
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying_2" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying_2" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                  <div id="carouselExampleAutoplaying_3" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner mt-5 mb-5">
                          <div class="carousel-item active">
                            <img src={safety_1} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={safety_2} class="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying_3" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying_3" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                  </div>
                </Col>
                <Col>
                <div class="mt-5  text-center">
                <p>A healthy workforce is what
                      you need the most and our
                      computer vision technology
                      based security system is
                      here to help you in keeping
                      track on the activities of
                      worker , safeguarding your
                      most precious resource-
                      human resource.
                      
                  </p>
                  </div>
                </Col>
            </Row>
            

        </Container>
    </div>
  )
}

export default Page_4
