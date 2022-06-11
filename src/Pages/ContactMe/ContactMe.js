import React, { useState } from 'react';
import { Row, Col, Button, InputGroup, Form } from 'react-bootstrap';
import { send } from 'emailjs-com';

const ContactMe = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_226jk0d',
            'template_b3qmwmc',
            toSend,
            'bka8B-pVZmg9flSt2'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Row xs={1} md={2} className="g-5 m-5">
                <Col>
                    <h2 className='fw-bolder'>Get in touch</h2>
                    <p>Please fill out the form if you think I can help you with any of your upcoming web projects.</p>
                </Col>
                <Col className='text-align-left'>
                    <form onSubmit={onSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Your name"
                                name='from_name'
                                value={toSend.from_name}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                            <Form.Control
                                placeholder='Your email'
                                name='reply_to'
                                value={toSend.reply_to}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Your Message</InputGroup.Text>
                            <Form.Control
                                as="textarea"
                                name='message'
                                placeholder='Your message'
                                value={toSend.message}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <Button className='mt-3 w-100 fw-bold' variant='dark' as="input" type="submit" value="Submit" />

                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default ContactMe;