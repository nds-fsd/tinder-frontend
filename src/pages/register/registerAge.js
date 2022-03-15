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
import { Select } from '@mui/material';






export function RegisterAge() {
     
const [contador, setContador] = useState();
const [value1, setValue1] = useState([18,35]);
const minEdad = value1[0];
const maxEdad = value1[1];
const rangeAge = value1;
const navigate = useNavigate();
const token = getUserToken()
const myDecodedToken = decodeToken(token);
const isMyTokenExpired = isExpired(token);
const userID = myDecodedToken.id;
const registroAge =  myDecodedToken.email;
const Complete = localStorage.getItem('CompleteAge');



   useEffect(() => {
        if(Complete === "yes") navigate('/register/ubication');
    }, []) 


const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  const onSubmit = (data) => {
    customFetch("PATCH", `user/modify/${userID}`, {body: {...data, rangeAge: rangeAge }})
    .then(userSession => {
      
      setUserSession(userSession);
      console.log(data);
      localStorage.setItem("CompleteAge", "yes");
      navigate("/register/ubication");

    }).catch(error => {
      // Ideally, we should show an error message to the user
      console.log(data)
      console.error(error);
      navigate("/register/ubication");
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
          <form onSubmit={handleSubmit(onSubmit)}>
                 
                  <p><input {...register('age')}  type="number" name="age" placeholder="age" className="login" onChange={(e) =>setContador (e.target.value)} /></p>
                  <br />
                  <p><select {...register('gener')} name="gener" placeholder="Select your gener" className="login">
                  <option selected>Select your gener</option>
                  <option value="man">Male</option>
                  <option value="girl">Female</option>
                  <option value="other">Other...</option></select></p>
                  <br />
                  <p><select {...register('orientation')} name="orientation" placeholder="Select your sexual orientation" className="login">
                  <option selected>What are you choosing</option>
                  <option value="man">Man</option>
                  <option value="girl">Girl</option>
                  <option value="Other">Other...</option>
                    </select></p>
                  <br />
                  <p>When are you birthday?</p>
                  <p><input  {...register('birthday')}  type="date" name="birthday" placeholder="Select date of your birthday" className="login" /></p>


                      <br />
                      <br />
                <p>Select your rate age</p>

                      <br />
                <center><p className="bubblexl"> from {minEdad} to {maxEdad} years </p></center>
                      <br />

                <p> <AgeSlider value1={value1} setValue1={setValue1}/>    </p>       
                <p className="texto">you have {contador} years and want to meet people between {minEdad} and {maxEdad} years</p>
        
                
                

                <BotonesFooter backUrl="/register" nextUrl="/register/ubication" />
                </form>
            </Col>
            <Col lg="4">
           
     
            </Col>
          </Row>
        
        </Container>
    );
};

