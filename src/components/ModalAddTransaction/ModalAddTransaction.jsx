import React, { useState } from 'react';
import css from './ModalAddTransaction.module.css';
import IncExpBtn from './IncExpBtn';

const ModalAddTransaction = ({ setOpenModal, isEditing }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const [transactionType, setTransactionType] = useState('income');

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleAmount = () => {
    console.log(amount);
  };
  const handleDate = () => {
    console.log(date);
  };
  const handleComment = () => {
    console.log(comment);
  };
  const handleAdd = () => {
    if (transactionType === 'income') {
      console.log('Add income transaction');
    } else {
      console.log('');
    }
    handleAmount();
    handleDate();
    handleComment();
    handleClose();
  };
  const handleSave = () => {
    if (transactionType === 'income') {
      console.log('Saved income transaction');
    } else {
      console.log('Saved expense transaction ');
    }
    handleAmount();
    handleDate();
    handleComment();
    handleClose();
  };

  return (
    <div className={css.modalBackground}>
      <div className={css.modalContainer}>
        <div className={css.modalHeader}>
          {isEditing ? (
            <h5 className={css.title}>Edit Transaction</h5>
          ) : (
            <h5 className={css.title}>Add Transaction</h5>
          )}{' '}
          <button type="button" className={css.closeBtn} onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path d="M1 1L17 17" stroke="black" />
              <path d="M1 17L17 0.999999" stroke="black" />
            </svg>
          </button>
        </div>
        <div className={css.modalBody}>
          <div className={css.switchContainer}>
            <span className={transactionType === 'income' ? css.incomeText : css.greyText}>
              Income
            </span>
            <IncExpBtn
              checked={transactionType === 'expense'}
              onChange={() =>
                setTransactionType(transactionType === 'income' ? 'expense' : 'income')
              }
            />
            <span className={transactionType === 'expense' ? css.expenseText : css.greyText}>
              Expense
            </span>
          </div>
          <div className={css.formContainer}>
            <input
              className={css.amountInput}
              type="number"
              placeholder="0,00"
              inputMode="none"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />

            <input
              className={css.dateInput}
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
            <textarea
              className={css.commentInput}
              rows="3"
              placeholder="Comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </div>
        </div>
        <div className={css.modalFooter}>
          {isEditing ? (
            <button type="button" className={css.btnAdd} onClick={handleAdd}>
              Save
            </button>
          ) : (
            <button type="button" className={css.btnAdd} onClick={handleSave}>
              Add
            </button>
          )}
          <button type="button" className={css.btnCancel} onClick={handleClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTransaction;

// modal usage

// const handleAddTransaction = () => {
//   setIsEditing(false);
//   setOpenModal(true);
// };

// const handleEditTransaction = (transactionData) => {
//   setIsEditing(true);
//   setTransactionToEdit(transactionData);
//   setOpenModal(true);
// };

// <div >
//       <button onClick={handleAddTransaction}>Add transaction</button>

//       <button
//         onClick={() => {
//           const editedTransactionData = {};
//           handleEditTransaction(editedTransactionData);
//         }}
//       >
//         Edit transaction
//       </button>

//       {modalOpen && (
//         <ModalAddTransaction
//           setOpenModal={setOpenModal}
//           isEditing={isEditing}
//           transactionToEdit={transactionToEdit}
//         />
//       )}
//     </div>
