import React, { useEffect, useState } from 'react';
import css from './ModalAddTransaction.module.css';
import IncExpBtn from './IncExpBtn';
import svg from '../../assets/icons/icons.svg';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const ModalAddTransaction = ({ handleClick, isEditing }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date()); // Domyślna data
  const [comment, setComment] = useState('');
  const [transactionType, setTransactionType] = useState('expense');

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
      console.log('Add expense transaction');
    }
    handleAmount();
    handleDate();
    handleComment();
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
  };

  const handleTransactionTypeChange = newType => {
    setTransactionType(newType);
  };

  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        handleClick();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return (
    <div className={css.modalBackground}>
      <div className={css.modalContainer}>
        <div className={css.modalHeader}>
          {isEditing ? (
            <h5 className={css.title}>Edit Transaction</h5>
          ) : (
            <h5 className={css.title}>Add Transaction</h5>
          )}
          <button type="button" className={css.closeBtn} onClick={handleClick}>
            <svg
              className={css.closeSvg}
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
            <span
              className={transactionType === 'income' ? css.incomeText : css.greyText}
              onClick={() => handleTransactionTypeChange('income')}
            >
              Income
            </span>
            {isEditing ? (
              ' / '
            ) : (
              <IncExpBtn
                checked={transactionType === 'expense'}
                onChange={() =>
                  setTransactionType(transactionType === 'income' ? 'expense' : 'income')
                }
              />
            )}
            <span
              className={transactionType === 'expense' ? css.expenseText : css.greyText}
              onClick={() => handleTransactionTypeChange('expense')}
            >
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
            <div className={css.dateInput}>
              <Datetime
                inputProps={{ className: css.date }}
                value={date}
                onChange={newDate => setDate(newDate)}
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                closeOnSelect
              />
              <svg className={css.icon}>
                <use xlinkHref={`${svg}#calendar`}></use>
              </svg>
            </div>
            {/* <input
              className={css.dateInput}
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            /> */}
            <textarea
              className={css.commentInput}
              rows="3"
              maxLength="70"
              placeholder="Comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </div>
        </div>
        <div className={css.modalFooter}>
          {isEditing ? (
            <button type="button" className={css.btnAdd} onClick={handleSave}>
              Save
            </button>
          ) : (
            <button type="button" className={css.btnAdd} onClick={handleAdd}>
              Add
            </button>
          )}
          <button type="button" className={css.btnCancel} onClick={handleClick}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTransaction;
