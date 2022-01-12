import React from 'react';
import './App.css';
import Section from './components/section/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AppHeader from './components/appHeader/AppHeader';

const App = () => {
  return (
    <>
      <AppHeader title={'Budget calculator'} />
      <Container>
        <Row md={4}>
          <Col md={5}>
            <Section>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter your total budget</Form.Label>
                  <Form.Control type="number" size="lg" />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" type="submit">
                    Save
                  </Button>
                </div>
              </Form>
            </Section>
            <Section>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter expense name</Form.Label>
                  <Form.Control type="text" size="lg" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Enter expense amount</Form.Label>
                  <Form.Control type="number" size="lg" />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg" type="submit">
                    Add
                  </Button>
                </div>
              </Form>
            </Section>
          </Col>
          <Col md={7}>2 of 3</Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
