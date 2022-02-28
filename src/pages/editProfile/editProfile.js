import { React, useReducer, useState } from 'react';
import { Col, Row, Container, Button, Card, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonAction from '../../components/buttonAction/buttonAction';
import './editProfile.css';

export function EditProfile() {
    return (
        <Container>
            <div className='wrapper'>
                <Row>
                    <p>Can wait to meet you</p>
                    <span>Editar Galeria</span>
                </Row>
                <Row className='Gallery'>
                    <Col class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </Col>

                    <Col class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </Col>

                    <Col class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <p>Bio</p>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        <Form>
                            <p>interes</p>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Back</Button>
                        <Button>Finish</Button>
                    </Col>
                </Row>
                <div className='copyright'>© 2020 Knou. All rights reserved</div>
            </div>
        </Container >
    )
};