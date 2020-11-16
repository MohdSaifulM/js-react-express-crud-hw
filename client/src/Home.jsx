import React from 'react';
import { Card, Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home({ buildings }) {

    async function del(id) {
        try {
            await axios.delete(`/api/v1/buildings/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Jumbotron>
                <h1>Architectures</h1>
            </Jumbotron>
            <Container>
                <Link to="/add">Add new</Link>
                <Row>
                    {buildings.map((el) => (
                        <Col md={4} className="my-3" key={el._id}>
                            <Card className="card-style">
                                <Card.Img variant="top" src={el.img_url} className="image-style" />
                                <Card.Body>
                                    <Card.Title>{el.building_name}</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Link to={`/building/${el._id}`}><small className="text-muted">Show</small></Link>
                                    <Button onClick={() => del(el._id)} href="/" >Delete</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Container>
        </>
    )
}

export default Home
