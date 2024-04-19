import { Form, Row, Button} from "react-bootstrap";
import React from "react";


function ContactForm(){
    return(
        <Form name="contact" method="post" data-netlify="true" onSubmit='submit'>
                <input type="hidden" name='form-name' value='contact'/>

                <Row>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name="name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="Message" name="message" />
                    </Form.Group>
                </Row>

                <Button type="submit">
                    Submit
                </Button>
        </Form>
    )
}

export default ContactForm;