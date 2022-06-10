import React from 'react';
import { Button, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, name, photo1, shortDescription, liveSite, clientCodeLink, serverCodeLink } = project;
    const navigate = useNavigate();

    const navigateToDetail = id => {
        navigate(`https://aqueous-island-27309.herokuapp.com/projects/${id}`);
    }

    return (
        <Col>
            <Card>
                <Card.Img variant="top" width='280px' src={photo1} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Button href={liveSite} className='m-2' variant="dark">Live Site</Button>
                    <Button href={clientCodeLink} className='m-2' variant="dark">GitHub Client Code</Button>
                    <Button href={serverCodeLink} className='m-2' variant="dark">Github Server Code</Button>
                    <Button onClick={() => navigateToDetail(_id)} className='m-2' variant="dark">Explore More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;