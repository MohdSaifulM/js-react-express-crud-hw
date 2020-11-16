import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Edit() {
    const [building, setBuilding] = useState({});

    let id = useParams().id;

    useEffect(() => {
        getBuilding();
    }, [])

    function changeHandler(e) {
        setBuilding((newBuilding) => ({ ...newBuilding, [e.target.name]: e.target.value }));
    }

    async function editBuilding() {
        try {
            await axios.put(`/api/v1/buildings/${id}`, building);
        } catch (error) {
            console.log(error);
        }
    }

    async function getBuilding() {
        try {
            let response = await axios.get(`/api/v1/buildings/${id}`);
            setBuilding(response.data.building);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(building)
    return (
        <>
            <Container>
                <div className="d-flex height">
                    <Form className="mx-auto align-self-center">
                        <h3 className="text-center">Edit building</h3>
                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Name of building" name="building_name" value={building.building_name} onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Year it was built" name="year_build" value={building.year_build} onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="City" name="city" value={building.city} onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Name of architect" name="architect" value={building.architect} onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Style of building" name="style" value={building.style} onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                                <Form.Group>
                                    <Col sm={12}>
                                        <Form.Control type="text" placeholder="Image URL" name="img_url" value={building.img_url} onChange={changeHandler} />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Button onClick={editBuilding} href={`/building/${id}`}>Update</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Edit
