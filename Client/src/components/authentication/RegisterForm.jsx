import React from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";

export default function RegisterForm(){
    return(
        <Container>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="name"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formSurname">
          <Form.Label column sm="2">
            Surname
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="surname"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBirthday">
          <Form.Label column sm="2">
            Birthday
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="birthday in xx/xx/xxxx"/>
          </Col>
        </Form.Group>
        

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

        <Form.Group as={Row} className="mb-3" controlId="formAvatar">
          <Form.Label column sm="2">
            Avatar
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="avatar"/>
          </Col>
        </Form.Group>

        <Button type="submit" className="bg-dark w-50"> Register </Button>
 
      </Form>
      </Container>
    )
}