import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-island-27309.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])

    return (
        <div>
            <h2 className='fw-bolder my-4'>Projects</h2>
            <Row xs={1} md={2} className="g-4 m-5">
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </Row>
        </div>
    );
};

export default Projects;