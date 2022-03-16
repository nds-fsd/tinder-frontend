import {React, useEffect} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import imagen from '../login/src/lime-417 1.png'; 
import logo from '../login/src/image2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { setUserSession, getUserToken } from '../../API/auth';



export function RegisterUser() {

    const navigate = useNavigate();

    useEffect(() => {
      const token = getUserToken()
      if(token) navigate('/register/age');
  }, []) 

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();



      const onSubmit = (data) => {
        customFetch("POST", "user/register", {body: data})
        .then(userSession => {
          setUserSession(userSession);
          navigate("/register/age");
        }).catch(error => {
          // Ideally, we should show an error message to the user
          console.log(data)
          console.error(error);
        });
      };


    return (

<Container>
         <Row>
         <Col lg="7" className="containerLeft"><center>
        <img src={imagen} alt="" className="imagenIzquierda"/> </center> </Col>
         <Col lg="5" className="containerRigth" > 
        <Row  className="loginHeader">
            <Col lg="4"><img src={logo} alt="" /></Col>
            <Col lg="4"></Col>
            <Col lg="4"><button className="signUpButton" onClick={() =>{ navigate("/login")}}>Login</button></Col>
        </Row> 
    <form onSubmit={handleSubmit(onSubmit)}> 
    <br />
    <br />
     <p className="WelcomeBack">START FOR FREE</p>
      <h2>Create an account</h2>
      <br />
      <br />
        <p> <input {...register('firstName')}  type="firstName" name="firstName" placeholder="First name" className="login" required/></p>
        <p> <input {...register('lastName')}  type="text" name="lastName" placeholder="Last name" className="login" required /></p>
        <p> <input {...register('email')}  type="email" name="email" placeholder="Email" className="login" required /></p>
        <p> <input {...register('password')}  type="password" name="password" placeholder="Password" className="login" required /> </p>
        <p> <input type="submit" className="boton" value="Sign in" /> </p>
        <p>Have you got an account? <span><a href="/login">Login</a></span></p>
    </form>
        </Col>
        </Row>
    </Container>
    
    );
}




