import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import developerPhoto from '../../images/Background.png';
import { saveAs } from "file-saver";
import Projects from '../Projects/Projects';

const Home = () => {

    const handleDownloadResume = () => {
        saveAs(process.env.PUBLIC_URL + "/resource/Pushpita Nandy Resume-updated.pdf", "Pushpita Nandy Resume.pdf");
    }

    return (
        <div>
            <div className='container-fluid m-5 p-5'>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} md={6} className='text-left'>
                        <h1>Hi! I'm Pushpita</h1>
                        <h5>Full Stack Web Developer</h5>
                        <p>Looking for opportunities to develop various Websites</p>
                        <br />
                        <Button onClick={handleDownloadResume} variant="dark">Download My Resume</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <img src={developerPhoto} alt="" />
                    </Col>
                </Row>
            </div>
            <Projects></Projects>
        </div>
    );
};

export default Home;