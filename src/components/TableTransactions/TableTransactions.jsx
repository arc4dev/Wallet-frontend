import css from './TableTransactions.module.css';
import svg from '../../assets/icons/icons.svg';

const TableTransactions = () => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th colSpan="2">Sum</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td data-label="Date">1.02.2021</td>
          <td data-label="Type">-</td>
          <td data-label="Category">Other</td>
          <td data-label="Comment">Gift for your wife</td>
          <td data-label="Sum">300</td>
          <td className={css.table__addons}>
            <div className={css.editBtn}>
              <svg className={css.editIcon}>
                <use xlinkHref={`${svg}#icon-edit`}></use>
              </svg>
              <span className={css.editText}>Edit</span>
            </div>
            <button className={css.deleteBtn} type="button">
              Delete
            </button>
          </td>
        </tr>

        <tr>
          <td data-label="Date">1.02.2021</td>
          <td data-label="Type">-</td>
          <td data-label="Category">Other</td>
          <td data-label="Comment">Gift for your wife</td>
          <td data-label="Sum">30000</td>
          <td className={css.table__addons}>
            <div className={css.editBtn}>
              <svg className={css.editIcon}>
                <use xlinkHref={`${svg}#icon-edit`}></use>
              </svg>
              <span className={css.editText}>Edit</span>
            </div>
            <button className={css.deleteBtn} type="button">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTransactions;
