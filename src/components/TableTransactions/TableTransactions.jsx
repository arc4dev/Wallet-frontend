import React, { useEffect, useState } from 'react';
import css from './TableTransactions.module.css';
import svg from '../../assets/icons/icons.svg';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalEditTransactionOpen } from 'redux/global/selectors';
import { toggleStateOf } from 'redux/global/slice';
import { selectTransactions } from 'redux/finance/selectors';
import { deleteTransaction } from 'redux/finance/operations';

const TableTransactions = () => {
  const dispatch = useDispatch();
  const isModalEditTransactionOpen = useSelector(selectIsModalEditTransactionOpen);
  const transactions = useSelector(selectTransactions);

  const [sortedTransactions, setSortedTransactions] = useState([]);
  const [editAmount, setEditAmount] = useState();
  const [editComment, setEditComment] = useState();
  const [editId, setEditId] = useState();
  const [editDate, setEditDate] = useState();
  const [editCategory, setEditCategory] = useState();
  const [opType, setOpType] = useState();

  const handleEditTransaction = id => {
    dispatch(toggleStateOf('isModalEditTransactionOpen'));

    const findTransactionByID = transactions.find(transaction => transaction._id === id);

    if (findTransactionByID) {
      setEditAmount(Math.abs(findTransactionByID.sum));
      setEditComment(findTransactionByID.comment);
      setEditId(id);
      setEditDate(findTransactionByID.date);
      setEditCategory(findTransactionByID.category);
      setOpType(findTransactionByID.type === '-' ? 'expense' : 'income');
    }
  };

  const handleDeleteTransaction = id => {
    dispatch(deleteTransaction(id));
  };

  useEffect(() => {
    const sorted = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));

    setSortedTransactions(sorted);
  }, [transactions]);

  return (
    <>
      {sortedTransactions.length !== 0 ? (
        <div className={css.table_wrapper}>
          <table className={css.table}>
            <thead className={css.tableHead}>
              <tr className={`${css.table_rows} ${css.headerTable}`}>
                <th>Date</th>
                <th>Type</th>
                <th>Category</th>
                <th>Comment</th>
                <th colSpan="2">Sum</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={css.tableBody}>
              {sortedTransactions.map(transaction => (
                <tr key={transaction._id} id={transaction._id}>
                  <td data-label="Date">{new Date(transaction.date).toLocaleDateString()}</td>
                  <td data-label="Type">{transaction.sum >= 0 ? '+' : '-'}</td>
                  <td data-label="Category">{transaction.category}</td>
                  <td data-label="Comment" style={{ height: '40px' }}>
                    {transaction.comment}
                  </td>
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
        <p className={css.paragraph}>No transactions added yet!</p>
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
          editDate={editDate}
          operationType={opType}
          editCategory={editCategory}
        />
      )}
    </>
  );
};

export default TableTransactions;
