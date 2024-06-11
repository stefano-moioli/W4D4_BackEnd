import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

export default function LoginForm(){

return(
<Container>
        <Form>
       
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="email"/>
          </Col>
        </Form.Group>
  
        <Form.Group as={Row} className="mb-3" controlId="formPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>


        <Button type="button" className="bg-dark w-50"> Login </Button>
 
      </Form>
      </Container>

)}