import React from 'react';
import css from './TableTransactions.module.css';
import svg from '../../assets/icons/icons.svg';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalEditTransactionOpen } from 'redux/global/selectors';
import { toggleStateOf } from 'redux/global/slice';
import { selectTransactions } from 'redux/finance/selectors';
import { deleteTransaction } from 'redux/finance/operations';
import { nanoid } from '@reduxjs/toolkit';
import eachMinuteOfInterval from 'date-fns/eachMinuteOfInterval';
import { useState } from 'react';

const TableTransactions = () => {
  const dispatch = useDispatch();
  const isModalEditTransactionOpen = useSelector(selectIsModalEditTransactionOpen);
  const transactions = useSelector(selectTransactions);
  const [editAmount, setEditAmount] = useState();
  const [editComment, setEditComment] = useState();
  const [editId, setEditId] = useState();

  const handleEditTransaction = id => {
    dispatch(toggleStateOf('isModalEditTransactionOpen'));

    // znajduje transakcje po id i zwraca jej wartość - do modala edycji
    const findTransactionByID = transactions.find(transaction => transaction._id === id);

    if (findTransactionByID) {
      setEditAmount(Math.abs(findTransactionByID.sum));
      setEditComment(findTransactionByID.comment);
      setEditId(id);
    }
  };

  const handleDeleteTransaction = id => {
    dispatch(deleteTransaction(id));
  };

  // sortuje transakcje od najnowszej na górze
  const sortedTransactions = [...transactions].sort(
    (d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime()
  );

  return (
    <>
      {transactions.length !== 0 ? (
        <div className={css.table}>
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
          <table className={css.table}>
            <tbody>
              {sortedTransactions.map(transaction => (
                <tr id={transaction._id}>
                  <td data-label="Date">{new Date(transaction.date).toLocaleDateString()}</td>
                  <td data-label="Type">{transaction.sum >= 0 ? '+' : '-'}</td>
                  <td data-label="Category">{transaction.category}</td>
                  <td data-label="Comment">{transaction.comment}</td>
                  <td
                    style={
                      transaction.sum > 0
                        ? { color: 'var(--color-action-ok) ', fontWeight: '700' }
                        : { color: 'var(--color-action-bad)', fontWeight: '700' }
                    }
                    data-label="Sum"
                  >
                    {Math.abs(transaction.sum)}
                  </td>
                  <td className={css.table__addons}>
                    <div
                      className={css.editBtn}
                      onClick={() => handleEditTransaction(transaction._id)}
                    >
                      <svg className={css.editIcon}>
                        <use xlinkHref={`${svg}#icon-edit`}></use>
                      </svg>
                      <span className={css.editText}>Edit</span>
                    </div>
                    <button
                      onClick={() => handleDeleteTransaction(transaction._id)}
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
        </div>
      ) : (
        'No transactions added yet!'
      )}

      {isModalEditTransactionOpen && (
        <ModalAddTransaction
          handleClick={handleEditTransaction}
          isEditing={true}
          isModalAddTransactionOpen={isModalEditTransactionOpen}
          transactions={sortedTransactions}
          transactionAmount={editAmount}
          editComment={editComment}
          editId={editId}
        />
      )}
    </>
  );
};

export default TableTransactions;
