import css from './Balance.module.css';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalBalance } from 'redux/finance/selectors';

const Balance = () => {
  const balance = useSelector(selectTotalBalance);

  return (
    <div className={css.balance}>
      <span className={css.balance_text}>Your balance</span>
      <span className={css.balance_amount}>&#8372; {balance}</span>
    </div>
  );
};

export default Balance;
