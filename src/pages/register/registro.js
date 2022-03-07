
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { setUserSession, getUserToken } from '../../API/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { isExpired, decodeToken } from 'react-jwt';






export function Registro() {
     

const navigate = useNavigate();


    const token = getUserToken()
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    const userID = myDecodedToken.id;

   // if(token) navigate('/register/age');



const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    customFetch("PATCH", `user/modify/${userID}`, {body: data})
    .then(userSession => {
      setUserSession(userSession);
      console.log(data)
      //navigate("/register/ubication");
    }).catch(error => {
      // Ideally, we should show an error message to the user
      console.log(data)
      console.error(error);
    });
  };


    return (
        <Container> 

       
        
          <Row>
            <Col lg="4"></Col>
            <Col lg="4">
          <div className="Descrip">
            <h2>We can´t wait to meet you</h2>
                <p>Please fill the detail below so that we get to <span>knou</span> you</p>
              
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
                 
                  <p><input {...register('age')}  type="number" name="age" placeholder="age" className="login" /></p>
                  <p> <input type="submit" /></p>
            </form>
 
          <p className="texto">you have $años years and want to meet people between $ and $ years</p>
        
               
            </Col>
            <Col lg="4">
           
        
            </Col>
          </Row>
        
        </Container>
    );
};

