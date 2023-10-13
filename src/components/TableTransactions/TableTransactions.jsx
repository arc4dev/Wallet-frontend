import React from 'react';
import css from './TableTransactions.module.css';
import svg from '../../assets/icons/icons.svg';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalEditTransactionOpen } from 'redux/global/selectors';
import { toggleStateOf } from 'redux/global/slice';
import { selectTransactions } from 'redux/finance/selectors';

const TableTransactions = () => {
  const dispatch = useDispatch();
  const isModalEditTransactionOpen = useSelector(selectIsModalEditTransactionOpen);
  const transactions = useSelector(selectTransactions);

  const handleEditTransaction = () => {
    dispatch(toggleStateOf('isModalEditTransactionOpen'));
  };
  const handleDeleteTransaction = () => {
    console.log('Delete transaction');
  };

  return (
    <>
      {transactions.length !== 0 ? (
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
              {transactions.map(transaction => (
                <tr>
                  <td data-label="Date">{transaction.date}</td>
                  <td data-label="Type">{transaction.amount >= 0 ? '+' : '-'}</td>
                  <td data-label="Category">{transaction.category}</td>
                  <td data-label="Comment">{transaction.comment}</td>
                  <td data-label="Sum">{Math.abs(transaction.amount)}</td>
                  <td class={css.table__addons}>
                    <div className={css.editBtn} onClick={handleEditTransaction}>
                      <svg className={css.editIcon}>
                        <use xlinkHref={`${svg}#icon-edit`}></use>
                      </svg>
                      <span className={css.editText}>Edit</span>
                    </div>
                    <button
                      onClick={handleDeleteTransaction}
                      className={css.deleteBtn}
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </table>
      ) : (
        'No transactions added yet!'
      )}

      {isModalEditTransactionOpen && (
        <ModalAddTransaction
          handleClick={handleEditTransaction}
          isEditing={true}
          isModalAddTransactionOpen={isModalEditTransactionOpen}
        />
      )}
    </>
  );
};

export default TableTransactions;
