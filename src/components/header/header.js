import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './header.css';

function Header({ isLogged = false }) {

    return (
        <Row className="header" class='col-12'>
            <Col className='col-9 ' ><a href=""><img src={logo} alt="" /></a></Col>
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
        </Row>
    )
}



export default Header