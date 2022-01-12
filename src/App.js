import { useState } from 'react';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import Section from './components/section/Section';
import AppHeader from './components/appHeader/AppHeader';
import BudgetCard from './components/budgetCard/BudgetCard';
import ExpenseCard from './components/expenseCard/ExpenseCard';
import InfoSection from './components/infoSection/InfoSection';
import ExpenseInfoSection from './components/expenseInfoSection/ExpenseInfoSection';

const initData = [
  { id: 1, name: 'car', amount: 10 },
  { id: 2, name: 'house', amount: 25 },
  { id: 3, name: 'bike', amount: 5 },
];

const App = () => {
  const [expenses, setExpenses] = useState(() => initData);
  const [budget, setBudget] = useState(0);

  const handleDelItems = id => {
    setExpenses(expenses.filter(elem => elem.id !== id));
  };

  const handleBudget = budget => {
    setBudget(budget);
  };

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
              <ExpenseCard />
            </Section>
          </Col>
          <Col md={7}>
            <InfoSection budget={budget} expenses={8} />
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
