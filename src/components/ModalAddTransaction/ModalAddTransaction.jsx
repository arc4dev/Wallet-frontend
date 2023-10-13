import React, { useEffect, useState } from 'react';
import css from './ModalAddTransaction.module.css';
import IncExpBtn from './IncExpBtn';
import svg from '../../assets/icons/icons.svg';
import MySelectComponent from './Select';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { selectIsModalAddTransactionOpen } from 'redux/global/selectors';
import Buttons from 'components/Buttons/Buttons';

const ModalAddTransaction = ({ handleClick, isEditing }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState('');
  const [transactionType, setTransactionType] = useState('expense');

  const isModalAddTransactionOpen = useSelector(selectIsModalAddTransactionOpen);

  const categoryOptions = [
    { value: 'Main expenses', label: 'Main expenses' },
    { value: 'Products', label: 'Products' },
    { value: 'Car', label: 'Car' },
    { value: 'Self care', label: 'Self care' },
    { value: 'Child care', label: 'Child care' },
    { value: 'Household products', label: 'Household products' },
    { value: 'Education', label: 'Education' },
    { value: 'Leisure', label: 'Leisure' },
    { value: 'Other expenses', label: 'Other expenses' },
    { value: 'Entertainment', label: 'Entertainment' },
  ];

  useEffect(() => {
    if (isModalAddTransactionOpen) {
      document.body.classList.add(css.modalOpen);
    } else {
      document.body.classList.remove(css.modalOpen);
    }
  }, [isModalAddTransactionOpen]);

  const handleAdd = e => {
    let newAmount = +amount;
    if (transactionType === 'expense') newAmount = -amount;

    const newTransaction = {
      amount: newAmount,
      date,
      comment,
    };

    console.log(newTransaction);
    // add
  };
  const handleSave = e => {
    let newAmount = amount;
    if (transactionType === 'expense') newAmount = -amount;

    const updatedTransaction = {
      amount: newAmount,
      date,
      comment,
    };

    console.log(updatedTransaction);
    // save
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

  const isModalOpen = isEditing || isModalAddTransactionOpen;
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleClick}
      className={css.modalContainer}
      contentLabel="Add/Edit transaction modal"
      appElement={document.getElementById('root')}
      overlayClassName={css.modalOverlay}
    >
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
        <form className={css.formContainer}>
          <div className={css.categoryContainer}>
            <MySelectComponent categoryOptions={categoryOptions} />
          </div>
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

          <textarea
            className={css.commentInput}
            rows="3"
            maxLength="70"
            placeholder="Comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </form>
      </div>
      <div className={css.modalFooter}>
        {isEditing ? (
          <Buttons onClick={handleSave} variant="contained">
            Save
          </Buttons>
        ) : (
          <Buttons onClick={handleAdd} variant="contained">
            Add
          </Buttons>
        )}
        <Buttons onClick={handleClick} variant="outlined" type="button">
          Cancel
        </Buttons>
      </div>
    </ReactModal>
  );
};

export default ModalAddTransaction;
