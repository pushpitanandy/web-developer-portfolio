import React from 'react';
import { Button, Col, Row, Card } from 'react-bootstrap';
import bdTools from '../../images/bd_tools.png';
import perfumesUnited from '../../images/perfumes_united.png';
import dreamCanada from '../../images/dream_canada.png';

const Projects = () => {
    return (
        <div>
            <h2 className='my-4'>Projects</h2>
            <Row xs={1} md={3} className="g-4 m-5 p-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" height='350px' src={bdTools} />
                        <Card.Body>
                            <Card.Title>BD Tools</Card.Title>
                            <Card.Text>
                                A manufacturer's website.
                            </Card.Text>
                            <Button variant="dark">Show Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" height='350px' src={perfumesUnited} />
                        <Card.Body>
                            <Card.Title>Perfumes United</Card.Title>
                            <Card.Text>
                                An inventory management website.
                            </Card.Text>
                            <Button variant="dark">Show Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" height='350px' src={dreamCanada} />
                        <Card.Body>
                            <Card.Title>Dream Canada</Card.Title>
                            <Card.Text>
                                An independent service provider's website.
                            </Card.Text>
                            <Button variant="dark">Show Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Projects;