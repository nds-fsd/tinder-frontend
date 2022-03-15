import React, { useState } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './header.css';
import { setUserSession, getUserToken, removeSession} from '../../API/auth';
import { isExpired, decodeToken } from 'react-jwt';
import {useNavigate} from 'react-router-dom';


function Header({ isLogged = false, paso, paso2, paso3, paso4, Display }) {

    const navigate = useNavigate();
    const menu = paso;
    const menu2 = paso2;
    const menu3 = paso3;
    const menu4 = paso4;
    let menuDisplay;
    const token = getUserToken()
    const myDecodedToken = decodeToken(token);
    const isMyTokenExpired = isExpired(token);


    const cliqeo = () => {
        removeSession();
        navigate("/");
        
    }

    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


    if(Display === "yes") {
    menuDisplay = Display;} else 
    {menuDisplay = "nonDisplay";}

    let Logged;
  
  if(!token) {

       Logged = <>
       <a src='#' className='navlink'>How it works</a>
       <a href="/login"> <button className='btnPurple'>Login</button></a>
       <a href="/register/">  <button className='btnLila'>Register</button></a>
   </>
    
      } else { 
      Logged = <>

     <a href="/profile"> <button className='btnPurple'>Profile</button></a>
     <a href="/match">  <button className='btnPurple'>Match</button></a>
     <a href="/match">  <button className='btnPurple'>Ajustes</button></a>
     <button className='btnLila' onClick={handleShow}>Logout</button>

  </>}


   



    return (
        <Row className="header" class='col-12'>

            <Col className='col-9 ' ><a href="/"><img src={logo} alt="" /></a></Col>
            <Col className='col-3'>
            {Logged}
            </Col>

            <Col lg="4"></Col>
            <Col lg="4">
                
                <Row className={menuDisplay}>
                <center className="botonera">
                    <button className={menu}></button>  
                    <button className={menu2}></button>  
                    <button className={menu3}></button> 
                    <button className={menu4}></button>   
                </center>
                </Row>
           
            </Col>

            <Col lg="4"></Col>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to close the session? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cliqeo}>
            Yes
          </Button>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

        </Row>






    )

    }


export default Header;