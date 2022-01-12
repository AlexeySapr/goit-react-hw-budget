import React from 'react';
import './App.css';
import Section from './components/section/Section';

import { Container, Row, Col } from 'react-bootstrap';
import AppHeader from './components/appHeader/AppHeader';
import BudgetCard from './components/budgetCard/BudgetCard';
import ExpenseCard from './components/expenseCard/ExpenseCard';
import InfoSection from './components/infoSection/InfoSection';
import ExpenseInfoSection from './components/expenseInfoSection/ExpenseInfoSection';

const App = () => {
  return (
    <>
      <AppHeader title={'Budget calculator'} />
      <Container>
        <Row md={4}>
          <Col md={5}>
            <Section>
              <BudgetCard />
            </Section>
            <Section>
              <ExpenseCard />
            </Section>
          </Col>
          <Col md={7}>
            <InfoSection budget={10} expenses={8} />
            <ExpenseInfoSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
