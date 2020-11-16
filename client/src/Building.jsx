import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Image, Row, Card, ListGroup } from 'react-bootstrap';



function Building() {

    const [building, setBuilding] = useState([]);

    let id = useParams().id;

    useEffect(() => {
        getBuilding();
    }, [])

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

        <div className="d-flex height">
            <Row className="mx-auto align-self-center">
                <Image src={building.img_url} height="500px" className="border border-dark rounded" />
                <Card>
                    <Card.Body>
                        <Card.Title>{building.building_name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{building.city}</Card.Subtitle>
                        <Card.Text>
                            <ListGroup.Item>Architect: {building.architect}</ListGroup.Item>
                            <ListGroup.Item>Year Built: {building.year_build}</ListGroup.Item>
                            <ListGroup.Item>Style: {building.style}</ListGroup.Item>
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/edit/${building._id}`}>Edit</Link>
                </Card>
            </Row>
        </div>

    )
}

export default Building
