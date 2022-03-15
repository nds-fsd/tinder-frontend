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


//  map 

const [viewport, setViewport] = useState({
  latitude: 37.8,
  longitude: 96,
  zoom: 4,
  bearing: 0,
  pitch: 0
});


const [city, setCity] = useState("");

const [value, setValue] = useState(30);
const rangeDistance = value;

  


const navigate = useNavigate();


    const token = getUserToken()
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    const userID = myDecodedToken.id;
    const Complete = localStorage.getItem('CompleteUbication');


    useEffect(() => {
      if(Complete === "yes") navigate('/register/about');
  }, []) 

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    customFetch("PATCH", `user/modify/${userID}`, {body: {...data, localization: viewport, rangeDistance: rangeDistance }})
    .then(userSession => {
      setUserSession(userSession);
      console.log(data)
      navigate("/register/about");
    }).catch(error  => {
      // Ideally, we should show an error message to the user
      console.log(data)
      navigate("/register/about");
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
        <br />

    <Map viewport={viewport} setViewport={setViewport} />
    <br />
    <br />
    <br />
   <form onSubmit={handleSubmit(onSubmit)}>

   <p> <center> <input {...register('city')} type="text" name="city" placeholder="City" className="login" onChange={(e) => setCity(e.target.value)} /></center></p>
     <br />
      <p className="texto">What is the distance range you are interested in?</p>

      <center><p className="bubble"> {value} km</p></center>
      <br />

    <UbicationSlider value={value} setValue={setValue} />
   
            
<p className="texto">You are in {city} and are interested in meeting people up to  {value} Km  away.</p>

<BotonesFooter backUrl="/register/age" nextUrl="/register/about" />
  </form>
  </div>  </Col>
    <Col lg="4">

    </Col>
  </Row>

</Container>


    );
}








