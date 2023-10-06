import React from 'react';
import css from './ButtonAddTransactions.module.css';
import svg from '../../assets/icons/icons.svg';

const ButtonAddTransactions = ({ onClick }) => {
  return (
    <div className={css.ButtonAddTransactions} onClick={onClick}>
      <svg className={css.AddIcon}>
        <use xlinkHref={`${svg}#icon-plus`}></use>
      </svg>
    </div>
  );
};

export default ButtonAddTransactions;
