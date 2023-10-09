import css from './TableTransactions.module.css';

const TableTransactions = () => {
  return (
    <table class={css.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th colspan="2">Sum</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td data-label="Date">1.02.2021</td>
          <td data-label="Type">-</td>
          <td data-label="Category">Other</td>
          <td data-label="Comment">Gift for your wife</td>
          <td data-label="Sum">300</td>
          <td class={css.table__addons}>
            <p>Edit</p>
            <button>Delete</button>
          </td>
        </tr>

        <tr>
          <td data-label="Date">1.02.2021</td>
          <td data-label="Type">-</td>
          <td data-label="Category">Other</td>
          <td data-label="Comment">Gift for your wife</td>
          <td data-label="Sum">30000</td>
          <td class={css.table__addons}>
            <p>Edit</p>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTransactions;
