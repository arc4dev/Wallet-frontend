import React from 'react';
import css from './ButtonAddTransactions.module.css';
import AddIcon from '../../assets/svg/+.svg';

const ButtonAddTransactions = ({ onClick }) => {
  return (
    <div className={css.ButtonAddTransactions} onClick={onClick}>
      <img src={AddIcon} alt="add icon" className={css.AddIcon} />
    </div>
  );
};

export default ButtonAddTransactions;
