import { React } from 'react';
import { Col, Row, Container, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import ButtonAction from '../../components/buttonAction/buttonAction';
import './style.css';
import Group1 from '../../assets/Group1.png';
import girl from '../../assets/girl.png';
import FooterUser from '../../components/footerUser/footerUser'




export function Home() {
    return (

        <Container>
            <Header />
            <div className='wrapper'>
                <Row class='container' >
                    <Col className='col-7 centered'>
                        <h2>The place where <br />you know people</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                        <ButtonAction></ButtonAction>
                    </Col>
                    <Col className='col-5 center'>
                        <img className='col-12' src={Group1}></img>
                    </Col>
                </Row>
                <Row class='container' className='extraMargin'>
                    <Col class="col-sm" className='cardcontainer'>
                        <Card className='mb-3, colorcontainer'>
                            <Card.Body>
                                <Card.Img src={girl} />
                                <Card.Title>Samantha, 26</Card.Title>
                                <Card.Text>a small description about yourself</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col class="col-sm" className='centertext' >
                        <h3>Create profile</h3>
                        <p className="text">Just by creating your profile at knou you will be able <br /> to know people from arround the <br /> world and find the perfect match for you!</p>
                        <a href='#' className='purpleLink' >Get started</a>
                    </Col>
                </Row>
                <Row classNamw="container" className='extraMargin'>
                    <Col className='dropShadow'>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id lectus vestibulum, ut fringilla dolor dapibus. Cras rhoncus ex tristique sem viverra faucibus. <br /> to know people from arround the <br /> world and find the perfect match for you!</p>
                    </Col>
                    <Row>
                        <FooterUser />
                    </Row>
                </Row>
                <Row>

                </Row>
                <div className='copyright'>© 2020 Knou. All rights reserved</div>
            </div>
        </Container >
    );
}

