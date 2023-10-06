import React from 'react';
import css from './App.module.css';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

export const App = () => {
  return (
    <div className={css.box}>
      Projekt Wallet :D
      <ButtonAddTransactions />
    </div>
  );
};
