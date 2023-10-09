// import css from './HomeTab.module.css';
import Balance from 'components/Balance/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import TableTransactions from 'components/TableTransactions/TableTransactions';
import ReactMedia from 'react-media';
import css from './HomeTab.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsModalAddTransactionOpen } from 'redux/global/selectors';
import { toggleStateOf } from 'redux/global/slice';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

const HomeTab = () => {
  const dispatch = useDispatch();
  const isModalAddTransactionOpen = useSelector(selectIsModalAddTransactionOpen);

  const toggleModalAddTransaction = () => {
    dispatch(toggleStateOf('isModalAddTransactionOpen'));
  };

  return (
    <div className={css.homeTab}>
      <ReactMedia
        queries={{
          mobile: '(max-width: 767px)',
          higher: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.mobile && (
              <>
                <Balance />
                <div className={css.tableWrapper}>
                  <TableTransactions />
                </div>
                {isModalAddTransactionOpen && (
                  <ModalAddTransaction handleClick={toggleModalAddTransaction} />
                )}
                <ButtonAddTransactions handleClick={toggleModalAddTransaction} />
              </>
            )}
            {matches.higher && (
              <>
                <div className={css.tableWrapper}>
                  <TableTransactions />
                </div>
                {isModalAddTransactionOpen && (
                  <ModalAddTransaction handleClick={toggleModalAddTransaction} />
                )}
                <ButtonAddTransactions handleClick={toggleModalAddTransaction} />
              </>
            )}
          </>
        )}
      </ReactMedia>
    </div>
  );
};

export default HomeTab;
