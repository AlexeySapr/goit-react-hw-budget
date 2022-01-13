import { useState } from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

import Section from './components/section/Section';
import AppHeader from './components/appHeader/AppHeader';
import BudgetCard from './components/budgetCard/BudgetCard';
import ExpenseCard from './components/expenseCard/ExpenseCard';
import InfoSection from './components/infoSection/InfoSection';
import ExpenseInfoSection from './components/expenseInfoSection/ExpenseInfoSection';
import { nanoid } from 'nanoid';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const handleDelItems = id => {
    setExpenses(expenses.filter(elem => elem.id !== id));
  };

  const handleBudget = budget => {
    setBudget(budget);
  };

  const handleExpenses = newExp => {
    setExpenses([{ id: nanoid(), ...newExp }, ...expenses]);
  };

  const allExpenses = expenses.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

  return (
    <>
      <AppHeader title={'Budget calculator'} />
      <Container>
        <Row md={4}>
          <Col md={5}>
            <Section>
              <BudgetCard handleBudget={handleBudget} />
            </Section>
            <Section>
              <ExpenseCard handleExpenses={handleExpenses} />
            </Section>
          </Col>
          <Col md={7}>
            <InfoSection budget={budget} expenses={allExpenses} />
            {expenses.length > 0 && (
              <ExpenseInfoSection
                expenses={expenses}
                delItems={handleDelItems}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
