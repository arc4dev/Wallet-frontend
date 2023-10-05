import React from 'react';
import css from './App.module.css';
import Currency from 'components/Currency/Currency';

export const App = () => {
  return (
    <div className={css.box}>
      Projekt Wallet :D
      <Currency />
    </div>
  );
};
