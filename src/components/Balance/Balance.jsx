import { useEffect } from 'react';
import css from './Balance.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalBalance, selectTransactions } from 'redux/finance/selectors';
import { setBalance } from 'redux/finance/slice';

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectTotalBalance);
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    const newBalance = transactions.reduce((acc, curr) => acc + curr.sum, 0);

    dispatch(setBalance(newBalance));
  }, [transactions, dispatch]);

  return (
    <div className={css.balance}>
      <span className={css.balance_text}>Your balance</span>
      <span className={css.balance_amount}>&#8372; {balance}</span>
    </div>
  );
};

export default Balance;
