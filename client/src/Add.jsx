import Axios from 'axios';
import React, { useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

function Add() {

    const [building, setBuilding] = useState({});

    function changeHandler(e) {
        setBuilding((building) => ({ ...building, [e.target.name]: e.target.value }));
    }

    async function addBuilding() {
        try {
            let resp = await Axios.post("/api/v1/buildings", building);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Container>
                <div className="d-flex height">
                    <Form className="mx-auto align-self-center">
                        <h3 className="text-center">Add new building</h3>
                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Name of building" name="building_name" onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Year it was built" name="year_build" onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="City" name="city" onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Name of architect" name="architect" onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Style of building" name="style" onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Image URL" name="img_url" onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Button onClick={addBuilding} href="/">Add</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Add
