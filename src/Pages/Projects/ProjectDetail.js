import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';


const ProjectDetail = () => {

    const { projectId } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        const url = `https://aqueous-island-27309.herokuapp.com/projects/${projectId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProject(data));
    }, [])

    return (
        <div>
            <h1 className='fw-bolder m-4'>Project Detail of {project.name}</h1>
            <div className='bg-dark border border-3 border-primary rounded-3 m-4'>
                <Row xs={1} md={3} className="g-4 m-5">
                    <Col>
                        <img src={project.photo1} alt="" />
                    </Col>
                    <Col>
                        <img src={project.photo2} alt="" />
                    </Col>
                    <Col>
                        <img src={project.photo3} alt="" />
                    </Col>
                </Row>
            </div>
            <div>
                <Button href={project.liveSite} className='m-2' variant="dark">Live Site</Button>
                <Button href={project.clientCodeLink} className='m-2' variant="dark">GitHub Client Code</Button>
                <Button href={project.serverCodeLink} className='m-2' variant="dark">Github Server Code</Button>
            </div>
            <div className='bg-dark text-white border border-2 border-primary rounded-3 m-5 p-5'>
                <h3 className='fw-bold m-3'>Description</h3>
                <div className='bg-light text-black border border-2 border-info rounded-3 m-2'>
                    <p>{project.bigDescription1}</p>
                </div>
                <div className='bg-light text-black border border-2 border-info rounded-3 m-2'>
                    <p>{project.bigDescription2}</p>
                </div>
                <div className='bg-light text-black border border-2 border-info rounded-3 m-2'>
                    <p>{project.bigDescription3}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;