import {React, useState, useEffect} from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import BotonesFooter from '../../components/botonesFooter/botonesFooter';
import UbicationSlider from '../../components/ubicationSlider';
import { setUserSession, getUserToken } from '../../API/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { isExpired, decodeToken } from 'react-jwt';




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

const navigate = useNavigate();


    const token = getUserToken()
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    const userID = myDecodedToken.id;

   /* useEffect(() => {
        if(token) navigate('/profile');
    }, []) */

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
      navigate("/register/about");
    }).catch(error => {
      // Ideally, we should show an error message to the user
      console.log(data)
      console.error(error);
    });
  };



return(



<Container> 

<Header paso2="activo" Display="yes"/>

  <Row>
    <Col lg="4"></Col>
    <Col lg="4">
  <div className="Descrip">
    <h2>We can´t wait to meet you</h2>
        <p>Please fill the detail below so that we get to <span>knou</span> you</p>
        <p>It seems that you are located in:</p>
        <form onChange={handleSubmit(onSubmit)}>
     <br />
     <br />
     <p> <input {...register('city')} type="text" name="city" placeholder="City" className="login" /></p>
     <br />
     <br /></form>
      </div>
      <Map viewport={viewport} setViewport={setViewport} />
          <p className="texto">What is the distance range you are interested in?</p>
          <div>
          <p><UbicationSlider /></p>
         <center> <div className="bubble">{contador} Km</div></center>
          </div>
            
  <p className="texto">You are in - location- and are interested in meeting people up to {contador} Km  away.</p>

        <BotonesFooter backUrl="/register/age" nextUrl="/register/about" />
    </Col>
    <Col lg="4">

    </Col>
  </Row>

</Container>


    );
}








