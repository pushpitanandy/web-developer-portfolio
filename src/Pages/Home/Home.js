import React, { Children } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import developerPhoto from '../../images/Background.png';
import { saveAs } from "file-saver";
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import AnimatedText from 'react-animated-text-content';

const Home = () => {

    const handleDownloadResume = () => {
        saveAs(process.env.PUBLIC_URL + "/resource/Pushpita Nandy Resume-updated.pdf", "Pushpita Nandy Resume.pdf");
    }

    return (
        <div>
            <div className='container-fluid m-5'>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} md={6} className='text-left'>

                        <AnimatedText
                            type='chars'
                            animation={{
                                x: '200px',
                                y: '-20px',
                                scale: 1.1,
                                ease: 'ease-in-out',
                            }}
                            animationType="float"
                            interval={0.06}
                            duration={0.8}
                            tag="h1"
                            className="animated-paragraph fw-bolder"
                            includeWhiteSpaces
                            threshold={0.1}
                            rootMargin="20%"
                        >
                            Hi! I'm Pushpita
                        </AnimatedText>
                        <AnimatedText
                            type='chars'
                            animation={{
                                x: '200px',
                                y: '-20px',
                                scale: 1.1,
                                ease: 'ease-in-out',
                            }}
                            animationType="float"
                            interval={0.1}
                            duration={0.8}
                            tag="h3"
                            className="animated-paragraph fw-bold"
                            includeWhiteSpaces
                            threshold={0.1}
                            rootMargin="20%"
                        >
                            Full Stack Web Developer
                        </AnimatedText>
                        <AnimatedText
                            type='chars'
                            animation={{
                                x: '200px',
                                y: '-20px',
                                scale: 1.1,
                                ease: 'ease-in-out',
                            }}
                            animationType="float"
                            interval={0.12}
                            duration={0.8}
                            tag="p"
                            className="animated-paragraph"
                            includeWhiteSpaces
                            threshold={0.1}
                            rootMargin="20%"
                        >
                            Looking for opportunities to develop various Websites
                        </AnimatedText>


                        <br />
                        <Button onClick={handleDownloadResume} variant="dark">Download My Resume</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <img width='250px' src={developerPhoto} alt="" />
                    </Col>
                </Row>
            </div>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;