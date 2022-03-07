import {React, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import './login.css';
import imagen from './src/lime-417 1.png'; 
import logo from './src/image2.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { setUserSession, getUserToken } from '../../API/auth';


export function Login(){

    const navigate = useNavigate();

    useEffect(() => {
        const token = getUserToken()
        if(token) navigate('/profile');
    }, []) 

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();



      const onSubmit = (data) => {
        customFetch("POST", "login", {body: data})
        .then(userSession => {
          setUserSession(userSession);
          console.log(data)
          navigate("/profile");
        }).catch(error => {
          // Ideally, we should show an error message to the user
          console.log(data)
          console.error(error);
        });
      };


    return(
        
    <Container>
         <Row>
         <Col lg="7" className="containerLeft"><center>
             <img src={imagen} alt="" className="imagenIzquierda"/></center> </Col>
         <Col lg="5" className="containerRigth" > 
        <Row  className="loginHeader">
            <Col lg="4"><img src={logo} alt="" /></Col>
            <Col lg="4"></Col>
            <Col lg="4"><button className="signUpButton">Sign up</button></Col>
        </Row> 
    <form onSubmit={handleSubmit(onSubmit)}> 
        <br />
        <br />
     <p className="WelcomeBack">Welcome back</p>
      <h2>Login into your account</h2>
      <br />
      <br />
        <p> <input  {...register('email')} type="email" name="email" placeholder="Email" className="login" /></p>
        <p> <input  {...register('password')}  type="password" name="password" placeholder="Password" className="login" /> </p>
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