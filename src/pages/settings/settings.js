import { React, useState } from 'react';
import { Col, Row, Container, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import ButtonAction from '../../components/buttonAction/buttonAction';
import './settings.css';


export function Settings() {

    const [contador, setContador] = useState(10);


    return (

        <Container>
            <Header />
            <div className='wrapper'>
                <Row>
                    <Col>
                        <h3>Ajustes de Cuenta</h3>
                        <input placeHolder='numero de telefono'></input>
                        <input placeHolder='correo electronico'></input>
                    </Col>
                    <span>Verifica la direccion de correo electronico y el numero de<br /> teléfono ayuda a proteger tu cuenta</span>
                </Row>
                <Row>
                    <Col>
                        <h3>Discovery</h3>


                        <p className="texto">What is the distance range you are interested in?</p>
                        <div>
                            <input type="range" name="rango" min="0" max="100" step="10" defaultValue="10" onChange={(ran) => setContador(ran.target.value)} className="sliderForm" />
                            <center> <div className="bubble">{contador} Km</div></center>
                        </div>

                        <p className="texto">You are in - location- and are interested in meeting people up to {contador} Km  away.</p>
                    </Col>
                </Row>
                <Row>
                    <p>Preferencia de edad</p>
                    <div>
                        <input type="range" name="rango" min="0" max="100" step="1" defaultValue="20" onChange={(ran) => setContador(ran.target.value)} className="sliderForm" />
                        <center> <div className="bubble">{contador} Km</div></center>
                    </div>
                </Row>
                <Row>
                    <h3>Mostrarme en Know</h3>
                    <p>Si esta desactivado, tu perfil no se mostrara en la pila de perfiles. La gente a quien hayas dado like todavia puede ver tu perfil y hacer match contigo. Puedes seguir viendo tus matches y chatear con ellos</p>
                </Row>
                <Row>
                    <h3>Notificaciones</h3>
                    button
                </Row>
            </div>

        </Container>
    )
};