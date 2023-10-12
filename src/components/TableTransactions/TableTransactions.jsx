import React, { useState } from 'react';
import css from './TableTransactions.module.css';
import svg from '../../assets/icons/icons.svg';
import ModalAddTransaction from '../ModalAddTransaction/ModalAddTransaction';

const TableTransactions = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    console.log('Edit button clicked');
    // Otwarcie modala edycji transakcji
    setEditModalOpen(true);
  };
  const handleAddClick = () => {
    console.log('Add button clicked');
    // Otwarcie modala dodawania nowej transakcji
    setEditModalOpen(true);
  };
  return (
    <>
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
                <div className={css.editBtn} onClick={handleEditClick}>
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
                <div className={css.editBtn} onClick={handleEditClick}>
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
      {isEditModalOpen && (
        <ModalAddTransaction
          handleClick={() => setEditModalOpen(false)}
          isEditing={true}
          isModalAddTransactionOpen={isEditModalOpen}
        />
      )}
    </>
  );
};

export default TableTransactions;
