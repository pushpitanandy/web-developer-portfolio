import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';

const Project = ({ project }) => {
    const { id, name, photo1, shortDescription, liveSite, clientCodeLink, serverCodeLink } = project;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={photo1} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Button href={liveSite} className='m-2' variant="dark">Live Site</Button>
                    <Button href={clientCodeLink} className='m-2' variant="dark">GitHub Client Code</Button>
                    <Button href={serverCodeLink} className='m-2' variant="dark">Github Server Code</Button>
                    <Button className='m-2' variant="dark">Explore More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;