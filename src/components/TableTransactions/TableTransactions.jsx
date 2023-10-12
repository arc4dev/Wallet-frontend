import css from './TableTransactions.module.css';
import svg from '../../assets/icons/icons.svg';

const TableTransactions = () => {
  return (
    <table class={css.table}>
      <thead>
        <tr className={`${css.table_rows} ${css.headerTable}`}>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th colspan="2">Sum</th>
          <th></th>
        </tr>
      </thead>
      <table class={css.table}>
        <tbody>
          <tr>
            <td data-label="Date">1.02.2021</td>
            <td data-label="Type">-</td>
            <td data-label="Category">Other</td>
            <td data-label="Comment">Gift for your wife</td>
            <td data-label="Sum">300</td>
            <td class={css.table__addons}>
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
            <td data-label="Sum" className={`${css['total-row']}`}>
              30000
            </td>
            <td class={css.table__addons}>
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
    </table>
  );
};

export default TableTransactions;
