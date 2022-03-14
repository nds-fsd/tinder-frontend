import { React, useReducer, useState } from 'react';
import { Col, Row, Container, Button, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/header/header';
import ButtonAction from '../../components/buttonAction/buttonAction';
import './userProfile.css';
import { BsFillPencilFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";


export function UserProfile() {
    return (

        <Container>
            <div className='wrapper'>
                <row>
                    <col>
                        <img className='profilePic' > </img>
                        <span>Nombre de usuario</span> <span>edad</span>
                        <div>
                            <button><AiTwotoneSetting /></button>
                            <span>Ajustes</span>
                        </div>
                        <div>
                            <button><BsFillPencilFill /></button>
                            <span>Editar perfil</span>
                        </div>
                    </col>
                </row>
                <row>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=First slide&bg=373940"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Knou Platinum</h3>
                                <p>optimiza cada accion que hagas en Knou</p>
                                <button>Saber mas</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Dale un giro a tu vida amorosa</h3>
                                <p>Desbloquea las mejores opciones que ofrece Knou</p>
                                <button>Ver todos los niveles</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>le gustas a 99+ personas</h3>
                                <p>Descubrelos ahora con Know premium</p>
                                <button>descubrir</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </row>

            </div>
        </Container>
    );
}