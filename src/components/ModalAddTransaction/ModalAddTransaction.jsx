import React, { useState } from 'react';
import css from './ModalAddTransaction.module.css';
import IncExpBtn from './IncExpBtn';
import svg from '../../assets/icons/icons.svg';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { InputAdornment, TextField } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import Buttons from 'components/Buttons/Buttons';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required')
    .test('no-spaces', 'Password cannot contain spaces', value => !/\s/.test(value)),
  checkPassword: yup
    .string('Enter your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
  name: yup.string('Enter your name').required('Name is required'),
});

const ModalAddTransaction = ({ setOpenModal, isEditing }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date()); // Domyślna data
  const [comment, setComment] = useState('');
  const [transactionType, setTransactionType] = useState('expense');

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

  const handleAdd = e => {
    if (transactionType === 'income') {
      console.log('Add income transaction');
    } else {
      console.log('Add expense transaction');
    }

    const transaction = {
      transactionType,
      amount,
      date,
      comment,
    };

    console.log(transaction);

    // handleAmount();
    // handleDate();
    // handleComment();
    // handleClose();
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

  const handleTransactionTypeChange = newType => {
    setTransactionType(newType);
  };

  return (
    <div className={css.modalBackground}>
      <div className={css.modalContainer}>
        <div className={css.contentContainer}>
          <div className={css.modalHeader}>
            {isEditing ? (
              <h5 className={css.title}>Edit Transaction</h5>
            ) : (
              <h5 className={css.title}>Add Transaction</h5>
            )}
            <button type="button" className={css.closeBtn} onClick={handleClose}>
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
              <div className={css.dateWrapper}>
                <TextField
                  className={css.numInput}
                  variant="standard"
                  type="number"
                  placeholder="0,00"
                  inputMode="none"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  required
                />
                <DatePicker
                  className={css.date2}
                  slotProps={{ textField: { variant: 'standard' } }}
                  format="DD-MM-YYYY"
                  defaultValue={dayjs(new Date())}
                  sx={{
                    '& input': { backgroundColor: 'white', padding: '4px 0 5px 20px' },
                    '& .MuiButtonBase-root': {
                      padding: '0 21px 0 0',
                    },
                  }}
                />
              </div>

              <TextField
                variant="standard"
                className={css.commentInput}
                placeholder="Comment"
                onChange={e => setComment(e.target.value)}
              />

              {/* <input
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
              /> */}

              {/* <input
                  className={css.dateInput}
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                /> */}
            </div>
          </div>
          <div className={css.modalFooter}>
            {isEditing ? (
              <button type="button" className={css.btnAdd} onClick={handleSave}>
                Save
              </button>
            ) : (
              // <button type="button" className={css.btnAdd} onClick={handleAdd}>
              //   Add
              // </button>
              <div onClick={handleAdd}>
                <Buttons variant="contained" className="filledBtn" text="Add" type="button" />
              </div>
            )}
            {/* <button type="button" className={css.btnCancel} onClick={handleClose}>
              CANCEL
            </button> */}
            <div onClick={handleClose}>
              <Buttons variant="outlined" className="emptyBtn" text="cancel" type="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTransaction;
