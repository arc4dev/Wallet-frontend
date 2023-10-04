import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/Auth/slice';

import css from './App.module.css';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

export const App = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.app.isModalAddTransactionOpen);

  const handleClick = () => {
    dispatch(toggleModal());
  };
  return (
    <div>
      <div className={css.box}>Projekt Wallet :D</div>
      <ButtonAddTransactions onClick={handleClick} />
      {isModalOpen && <ModalAddTransaction />}
    </div>
  );
};
