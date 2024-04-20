import { Form, Row, Button, Col} from "react-bootstrap";
import React from "react";


function ContactForm(){

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted!"); 
    };

    return(
        <Form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit} data-netlify-honeypot="bot-field">
                <input type="hidden" name='form-name' value='contact'/>
                <div hidden>
                    <input name="bot-field"/>
                </div>

                <Row className="pb-4 g-4">
                    <Col sm='6'>
                        <Form.Group controlId="formGroupName">
                            <Form.Label className="mb-1">Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" name="name" required/>
                        </Form.Group>
                    </Col>

                    <Col sm='6'>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label className="mb-1">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Eg. example@email.com" name="email" required/>
                        </Form.Group>
                    
                    </Col>
                </Row>

                <Row className="pb-4">
                    <Col sm='12'>
                        <Form.Group controlId="formGroupMessage">
                            <Form.Label className="mb-1">Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Write me a message" name="message" className="row-2" required/>
                        </Form.Group>
                    </Col>
 
                </Row>

                <Row>
                    <Col sm='12'>
                        <Button className="bg-contact-button-custom rounded-0 fw-medium px-5 py-2 rounded-0" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
                    
    
        </Form>
    )
}

export default ContactForm;