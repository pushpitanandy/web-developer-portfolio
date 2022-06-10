import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetail = () => {

    const { projectId } = useParams();
    const [projects, setProjects] = useState({});

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])

    return (
        <div>
            <h1>Project Detail of {projectId}</h1>

        </div>
    );
};

export default ProjectDetail;