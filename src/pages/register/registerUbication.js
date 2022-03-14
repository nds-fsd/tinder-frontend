import { React, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import BotonesFooter from '../../components/botonesFooter/botonesFooter';




export function RegisterUbication() {

  const [contador, setContador] = useState(10);

  //  map 

  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: 96,
    zoom: 4,
    bearing: 0,
    pitch: 0
  });


  return (



    <Container>

      <Header paso2="activo" />

      <Row>
        <Col lg="4"></Col>
        <Col lg="4">
          <div className="Descrip">
            <h2>We can´t wait to meet you</h2>
            <p>Please fill the detail below so that we get to <span>knou</span> you</p>
            <p>It seems that you are located in:</p>
          </div>
          <Map viewport={viewport} setViewport={setViewport} />
          <p className="texto">What is the distance range you are interested in?</p>
          <div>
            <input type="range" name="rango" min="0" max="100" step="10" defaultValue="10" onChange={(ran) => setContador(ran.target.value)} className="sliderForm" />
            <center> <div className="bubble">{contador} Km</div></center>
          </div>

          <p className="texto">You are in - location- and are interested in meeting people up to {contador} Km  away.</p>

          <BotonesFooter backUrl="/registe/age" nextUrl="/register/about" />
        </Col>
        <Col lg="4">

        </Col>
      </Row>

    </Container>


  );
}








