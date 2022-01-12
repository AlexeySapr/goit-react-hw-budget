import { Button } from 'react-bootstrap';
import s from './ExpenseInfoSection.module.css';

const ExpenseInfoSection = () => {
  return (
    <table className={s.infoTable}>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>cell1_1</td>
          <td>cell2_1</td>
          <td>
            <Button variant="primary">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>cell1_2</td>
          <td>cell2_2</td>
          <td>
            <Button variant="primary">Delete</Button>
          </td>
        </tr>
        <tr>
          <td>cell1_3</td>
          <td>cell2_3</td>
          <td>
            <Button variant="primary">Delete</Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseInfoSection;
