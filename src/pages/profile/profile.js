import { React, useReducer, useState, useEffect } from 'react';
import { Col, Row, Container, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import './profile.css';
import { setUserSession, getUserToken } from '../../API/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import customFetch from '../../API';
import { isExpired, decodeToken } from 'react-jwt';



export function Profile() {


    const [ user, setUser] = useState ([]);
       

    const token = getUserToken()
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);
    const userID = myDecodedToken.id;
    console.log(userID)

    const imgPerfil = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    const imgViaje1 ="https://images.pexels.com/photos/5589359/pexels-photo-5589359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje2 ="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
    const imgViaje3 ="https://images.pexels.com/photos/7429616/pexels-photo-7429616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje4 ="https://images.pexels.com/photos/1835927/pexels-photo-1835927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje5 ="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje6 ="https://images.pexels.com/photos/6238186/pexels-photo-6238186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    
    useEffect(() => {
        fetch(`http://localhost:5002/api/user/${userID}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Algo ha fallado");
            }
            return response.json();
          })
          .then((json) => {
            setUser(json);
          })
          .catch((error) => {
            console.log(error);
          })
      }, []);
  



    return (

        <Container>
           <Header />
           <Row>
               <Col lg="3"></Col>
               <Col lg="6">
                   <Row>
                      
    <p className="helloUser">Hello <span className="NameUser">{user.firstName}</span> ¿How are you?</p>
                   <p> <a> edit</a></p>
                   <img className="fotoPerfil" src={imgPerfil} alt="" />
                   
                   <p> <a> edit</a></p>
                   <p className="userDescription">
                   {user.descriptionUser} 
                   </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                <div class="tagsUser">
                <p> <a> edit</a></p>
                  <p><center> <button className="tagUno" value="compras"> <a className="tagIcon"></a>Deporte</button> 
                   <button className="tagUno" value="compras"> <a className="tagIcon"></a>Pasear</button>
                   <button className="tagUno" value="compras"> <a className="tagIcon"></a>Leer</button>
                   <button className="tagUno" value="compras"> <a className="tagIcon"></a>Cocinar</button>
                   <button className="tagUno" value="compras"> <a className="tagIcon"></a>Viajar</button></center> </p>
                   </div>

                   
                <Container>
                    <p> <a> edit</a></p>
                    <Row>
                        <Col lg={4}>
                        <img className="Galeriaimg" src={imgViaje1} alt="" /> 
                           </Col>
                        <Col lg={4}>
                        <img className="Galeriaimg" src={imgViaje2} alt="" />  
                           </Col> 
                        <Col lg={4}>
                        <img className="Galeriaimg" src={imgViaje3} alt="" />
                            </Col>
                        <Col lg={4}>
                        <img className="Galeriaimg" src={imgViaje4} alt="" />
                            </Col>
                        <Col lg={4}>
                        <img className="Galeriaimg" src={imgViaje5} alt="" />
                            </Col>
                        <Col lg={4}>
                        <img className="Galeriaimg" src={imgViaje6} alt="" />
                            </Col>
                    </Row>
                
                </Container>       
                            
                   </Row>

                   


                   
                
               </Col>
               <Col lg="3"></Col>
           </Row>
        </Container>
    );
}

