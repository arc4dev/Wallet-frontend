import css from './Balance.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalBalance, selectTransactions } from 'redux/finance/selectors';

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectTotalBalance);
  const transactions = useSelector(selectTransactions);

  // useEffect(() => {}, [dispatch, transactions]);

  return (
    <div className={css.balance_box}>
      <div className={css.balance}>
        <span className={css.balance_text}>Your balance</span>
        <span className={css.balance_amount}>&#8372; {balance}</span>
      </div>
    </div>
  );
};

export default Balance;
