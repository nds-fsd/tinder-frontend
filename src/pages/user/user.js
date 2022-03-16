import { React, useReducer, useState, useEffect } from 'react';
import { Col, Row, Container, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import './user.css';
import { Favorite, ChatBubble } from '@mui/icons-material';
import { setUserSession, getUserToken } from '../../API/auth';
import { useNavigate } from 'react-router-dom';





export function User() {

    const navigate = useNavigate();
    const token = getUserToken()

    useEffect(() => {
        const token = getUserToken()
        if(!token) navigate('/login');
    }, []) 



    const imgPerfil = "https://images.pexels.com/photos/567452/pexels-photo-567452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500://images.pexels.com/photos/5931204/pexels-photo-5931204.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500://images.pexels.com/photos/5785673/pexels-photo-5785673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
    const imgViaje1 ="https://images.pexels.com/photos/5589359/pexels-photo-5589359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje2 ="https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
    const imgViaje3 ="https://images.pexels.com/photos/7429616/pexels-photo-7429616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje4 ="https://images.pexels.com/photos/1835927/pexels-photo-1835927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje5 ="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    const imgViaje6 ="https://images.pexels.com/photos/6238186/pexels-photo-6238186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";



    return (

        <Container>
           <Header />
           <Row>
               <Col lg="3"></Col>
               <Col lg="6">
                   <Row>
                      
                   <p className="helloUser">I´m <span className="NameUser">Melodie</span> ¿We speak?</p>
                   <img className="fotoPerfil" src={imgPerfil} alt="" />

                   <p><center><button className="likeUser"><Favorite sx={{ fontSize: 40}} /></button>       <button className="messageUser"><ChatBubble sx={{ fontSize: 40 }} /></button></center></p>
    
                    <div className="userDescription">
                    <p><h3>Description:</h3></p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut quam nisl. Quisque porta, elit ultricies ornare mattis, leo justo laoreet magna, nec consectetur orci tellus et lacus. 
                   Integer vitae leo hendrerit, hendrerit sem eu, bibendum urna. Vestibulum quam lacus, ultricies vitae efficitur sed, egestas eu nulla. 
                   Integer porttitor, leo sed dictum posuere, felis dolor tincidunt metus, at tempus nulla risus sit amet augue. Integer tempus augue quis sodales auctor. 
                  </div>
                    
                <div className="intereses">
                <h3>Intereses:</h3>
                  <p><center> <button className="tagUno" value="compras"> <a className="tagIcon"></a>Deporte</button> 
                   <button className="tagUno"> <a className="tagIcon"></a>Pasear</button>
                   <button className="tagUno"> <a className="tagIcon"></a>Leer</button>
                   <button className="tagUno"> <a className="tagIcon"></a>Cocinar</button>
                   <button className="tagUno"> <a className="tagIcon"></a>Viajar</button></center> </p>
                   </div>

                   
                <Container>
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

