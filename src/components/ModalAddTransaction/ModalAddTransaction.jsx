import React, { useEffect, useState } from 'react';
import css from './ModalAddTransaction.module.css';
import IncExpBtn from './IncExpBtn';
import svg from '../../assets/icons/icons.svg';
import MySelectComponent from './Select';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalAddTransactionOpen } from 'redux/global/selectors';
import Buttons from 'components/Buttons/Buttons';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addTransaction } from 'redux/finance/operations';

const ModalAddTransaction = ({ handleClick, isEditing }) => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState('');
  const [transactionType, setTransactionType] = useState('income');
  const [category, setCategory] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const dispatch = useDispatch();
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

  useEffect(() => {
    setCategory('');
  }, [transactionType]);

  const transactionSchema = yup.object().shape({
    amount: yup
      .number()
      .required('Amount is required')
      .min(0, 'Amount must be greater than or equal to 0'),
    date: yup.date().required('Date is required'),
    category: yup.string().when('transactionType', {
      is: 'expense',
      then: yup.string().required('Category is required for expenses'),
    }),
    comment: yup.string(),
  });

  const handleAdd = async () => {
    const isValid = await handleValidation();
    if (isValid) {
      const newAmount = transactionType === 'expense' ? -amount : +amount;
      const newCategory = transactionType === 'expense' ? category.toLowerCase() : 'income';

      const newTransaction = {
        sum: newAmount,
        date,
        comment,
        category: newCategory,
      };

      console.log('Adding new transaction:', newTransaction);
      handleClick();

      // Add transaction
      dispatch(addTransaction({ ...newTransaction }));
    }
  };

  const handleSave = async () => {
    const isValid = await handleValidation();
    if (isValid) {
      const newAmount = transactionType === 'expense' ? -amount : +amount;
      const newCategory = transactionType === 'expense' ? category : 'income';

      const updatedTransaction = {
        sum: newAmount,
        date,
        comment,
        category: newCategory,
      };
      console.log('Updating transaction:', updatedTransaction);
      // Savw
    }
  };

  const handleValidation = async () => {
    if (transactionType === 'expense' && category === '') {
      toast.error('Category is required for expenses', { position: 'top-right' });
      return false;
    }
    if (amount === '') {
      toast.error('Amount is required', { position: 'top-right' });
      return false;
    }
    try {
      await transactionSchema.validate(
        {
          amount: parseFloat(amount),
          date,
          category: transactionType === 'expense' ? category : undefined,
          comment,
        },
        { abortEarly: false }
      );
      setValidationErrors({});
      return true;
    } catch (errors) {
      const errorsObject = errors.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setValidationErrors(errorsObject);
      Object.keys(errorsObject).forEach(key => {
        toast.error(errorsObject[key], { position: 'top-right' });
      });

      return false;
    }
  };

  const handleTransactionTypeChange = newType => {
    setCategory('');
    setTransactionType(newType);
  };
  useEffect(() => {
    if (transactionType === 'income') {
      setCategory('');
    }
  }, [transactionType]);

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
          {transactionType === 'expense' && (
            <div className={css.categoryContainer}>
              <MySelectComponent categoryOptions={categoryOptions} onCategoryChange={setCategory} />
            </div>
          )}
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
