import {React, useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../components/header/header';
import BotonesFooter from '../../components/botonesFooter/botonesFooter';
import AgeSlider from '../../components/ageSlider';
import { setUserSession, getUserToken } from '../../API/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { isExpired, decodeToken } from 'react-jwt';






export function RegisterAge(value1) {
     
const [contador, setContador] = useState(10);
const [value, setValue] = useState([20, 37]);


const navigate = useNavigate();


    const token = getUserToken()
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    const userID = myDecodedToken.id;

   // if(token) navigate('/register/age');

   /* useEffect(() => {
        if(token) navigate('/profile');
    }, []) */


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
      navigate("/register/ubication");
    }).catch(error => {
      // Ideally, we should show an error message to the user
      console.log(data)
      console.error(error);
    });
  };


    return (
        <Container> 

        <Header paso="activo" Display="yes"/>
        
          <Row>
            <Col lg="4"></Col>
            <Col lg="4">
          <div className="Descrip">
            <h2>We can´t wait to meet you</h2>
                <p>Please fill the detail below so that we get to <span>knou</span> you</p>
              
          </div>
          <form onChange={handleSubmit(onSubmit)}>
                 
                  <p><input {...register('age')}  type="number" name="age" placeholder="age" className="login" /></p>
                  <br />
                  <p>When are you birthday?</p>
                  <p><input  {...register('birthday')}  type="date" name="birthday" placeholder="Select date of your birthday" className="login" /></p>
              

                      <br />
                      <br />
                <p>Select your rate age</p>
                      <br />
                      <br />
                      <br />

                 <p> <AgeSlider/>    </p>                 
            

            
 
          <p className="texto">you have $años years and want to meet people between $ and $ years</p>
        
                
                </form>

                <BotonesFooter backUrl="/register" nextUrl="/register/ubication" />
            </Col>
            <Col lg="4">
           
        
            </Col>
          </Row>
        
        </Container>
    );
};

