import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import './login.css';
import imagen from './src/lime-417 1.png'; 
import logo from './src/image2.png';


export function Login(){

    return(
        
    <Container fluid="lg" className="contenedor">
         <Row>
         <Col lg="7" className="containerLeft"><center>
             <img src={imagen} alt="" className="imagenIzquierda"/></center> </Col>
         <Col lg="5" className="containerRigth" > 
        <Row  className="loginHeader">
            <Col lg="4"><img src={logo} alt="" /></Col>
            <Col lg="4"></Col>
            <Col lg="4"><button className="signUpButton">Sign up</button></Col>
        </Row> 
    <form> 
     <p className="WelcomeBack">Welcome back</p>
      <h2>Login into your account</h2>
        <p> <input type="email" name="email" placeholder="Email" className="login" /></p>
        <p> <input type="password" name="password" placeholder="Password" className="login" /> </p>
        <p> <input type="submit" className="boton" value="Sign in" /> </p>
        <p>Don´t have an account? <span><a href="Sing up">Sing up</a></span></p>
    </form>
        </Col>
        </Row>
    </Container>
    )
}
//crear useEffect y anclarlo a un back cuanro antes! 
///pendiente añadir logo y boton sing up arriba