import { Form, Row , Button} from "react-bootstrap";


function ContactForm(){
    return(
        <Form name="contact" method="POST" data-netlify="true" netlify>
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
                <Button type="submit">
                    Submit
                </Button>
            </Row>
        </Form>
    )
}

export default ContactForm;