import React from 'react';
import css from './ModalAddTransaction.module.css';
import IncExpBtn from './IncExpBtn';
import svg from '../../assets/icons/icons.svg';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const ModalAddTransaction = ({ setOpenModal, isEditing }) => {
  const initialValues = {
    amount: '',
    date: new Date(),
    comment: '',
    transactionType: 'expense',
  };

  const validationSchema = Yup.object()
    .shape({
      amount: Yup.number().required('Amount is required').min(0, 'The amount cannot be negative'),
      date: Yup.date().required('Date is required'),
      transactionType: Yup.string().required('Transaction type is required'),
      comment: Yup.string(),
    })
    .when('transactionType', {
      is: 'expense',
      then: Yup.object({
        category: Yup.string().required('Category is required'),
      }),
    });

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleAdd = values => {
    if (values.transactionType === 'income') {
      console.log('Add income transaction');
      toast.success('The income transaction has been added successfully');
    } else {
      console.log('Add expense transaction');
      toast.success('The expense transaction has been added successfully');
    }
    console.log(values);
    handleClose();
  };

  const handleTransactionTypeChange = (newType, setFieldValue) => {
    setFieldValue('transactionType', newType);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        handleAdd(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className={css.modalBackground}>
            <div className={css.modalContainer}>
              <div className={css.modalHeader}>
                {isEditing ? (
                  <h5 className={css.title}>Edit Transaction</h5>
                ) : (
                  <h5 className={css.title}>Add Transaction</h5>
                )}
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
                  <span
                    className={values.transactionType === 'income' ? css.incomeText : css.greyText}
                    onClick={() => handleTransactionTypeChange('income', setFieldValue)}
                  >
                    Income
                  </span>
                  {isEditing ? (
                    ' / '
                  ) : (
                    <IncExpBtn
                      checked={values.transactionType === 'expense'}
                      onChange={() =>
                        setFieldValue(
                          'transactionType',
                          values.transactionType === 'income' ? 'expense' : 'income'
                        )
                      }
                    />
                  )}
                  <span
                    className={
                      values.transactionType === 'expense' ? css.expenseText : css.greyText
                    }
                    onClick={() => handleTransactionTypeChange('expense', setFieldValue)}
                  >
                    Expense
                  </span>
                </div>
                <div className={css.formContainer}>
                  {values.transactionType === 'expense' && (
                    <div className={css.categorySelect}>
                      <label htmlFor="category"></label>
                      <Field as="select" name="category" className={css.categorySelectInput}>
                        <option
                          className={css.categorySelectedOption}
                          value=""
                          disabled
                          selected
                          hidden
                        >
                          Select a category
                        </option>
                        <option value="Main expenses">Main expenses</option>
                        <option value="Products">Products</option>
                        <option value="Car">Car</option>
                        <option value="Self care">Self care</option>
                        <option value="Child care">Child care</option>
                        <option value="Household products">Household products</option>
                        <option value="Education">Education</option>
                        <option value="Leisure">Leisure</option>
                        <option value="Other expenses">Other expenses</option>
                        <option value="Entertainment">Entertainment</option>
                      </Field>
                    </div>
                  )}
                  <Field name="amount">
                    {({ field }) => (
                      <div>
                        <input
                          className={css.amountInput}
                          type="number"
                          placeholder="0,00"
                          inputMode="none"
                          {...field}
                        />
                        <ErrorMessage name="amount" component="div" className={css.error} />
                      </div>
                    )}
                  </Field>
                  <div className={css.dateInput}>
                    <Datetime
                      inputProps={{ className: css.date }}
                      value={values.date}
                      onChange={newDate => setFieldValue('date', newDate)}
                      dateFormat="YYYY-MM-DD"
                      timeFormat={false}
                      closeOnSelect
                    />
                    <svg className={css.icon}>
                      <use xlinkHref={`${svg}#calendar`}></use>
                    </svg>
                  </div>
                  <Field name="comment">
                    {({ field }) => (
                      <textarea
                        className={css.commentInput}
                        rows="3"
                        placeholder="Comment"
                        {...field}
                      />
                    )}
                  </Field>
                </div>
              </div>
              <div className={css.modalFooter}>
                {isEditing ? (
                  <button type="submit" className={css.btnAdd}>
                    Save
                  </button>
                ) : (
                  <button type="submit" className={css.btnAdd}>
                    Add
                  </button>
                )}
                <button type="button" className={css.btnCancel} onClick={handleClose}>
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModalAddTransaction;
