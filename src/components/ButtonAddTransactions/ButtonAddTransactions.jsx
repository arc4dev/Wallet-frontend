import React, { useState } from 'react';
import css from './ButtonAddTransactions.module.css';
import svg from '../../assets/icons/icons.svg';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';

const ButtonAddTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className={css.ButtonAddTransactions} onClick={handleOpenModal}>
        <svg className={css.AddIcon}>
          <use xlinkHref={`${svg}#icon-plus`}></use>
        </svg>
      </div>

      {isModalOpen && <ModalAddTransaction setOpenModal={setIsModalOpen} />}
    </div>
  );
};

export default ButtonAddTransactions;
