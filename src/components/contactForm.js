import { Form, Row , Button} from "react-bootstrap";


function ContactForm(){
    return(
        <Form name="contact" method="POST" data-netlify="true" >
            <Row>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" id="name" name="name"/>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" id="email" name="email" />
                </Form.Group>
                <Form.Group controlId="formGroupMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Message"/>
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Row>
        </Form>
    )
}

export default ContactForm;