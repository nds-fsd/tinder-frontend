import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from './logo.png';
import './header.css';

function Header({paso, paso2, paso3, paso4}) {

    const menu = paso;
    const menu2 = paso2;
    const menu3 = paso3;
    const menu4 = paso4;



    return(
    <Row className="header">
        <Col lg="1"><a href=""><img src={logo} alt="" /></a></Col>
        <Col lg="11"></Col>
 
        <Col lg="4">

        </Col>
        <Col lg="4" className="botonera">
            <button className={menu}>
            </button>  
            <button className={menu2}>
            </button>  
            <button className={menu3}>
            </button> 
            <button className={menu4}>
            </button>   
        </Col> 
        <Col lg="4">

        </Col>
    </Row>
    
    )
}

export default Header