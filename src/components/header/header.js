import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './header.css';

function Header({ isLogged = false, paso, paso2, paso3, paso4, Display }) {

    const menu = paso;
    const menu2 = paso2;
    const menu3 = paso3;
    const menu4 = paso4;
    let menuDisplay;

    if(Display === "yes") {
    menuDisplay = Display;} else 
    {menuDisplay = "nonDisplay";}
  


    return (
        <Row className="header" class='col-12'>
            <Col className='col-9 ' ><a href="/"><img src={logo} alt="" /></a></Col>
            <Col className='col-3'>
                {!isLogged ? (
                    <>
                        <a src='#' className='navlink'>How it works</a>
                        <button className='btnPurple'>Login</button>
                        <button className='btnLila'>Register</button>
                    </>
                ) : (
                    <button>Log out</button>
                )}

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
        </Row>
    )
}



export default Header