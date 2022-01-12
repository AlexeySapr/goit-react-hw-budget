import { Form, Button } from 'react-bootstrap';
import FormCard from '../formCard/FormCard';

const ExpenseCard = () => {
  return (
    <FormCard>
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
    </FormCard>
  );
};

export default ExpenseCard;
