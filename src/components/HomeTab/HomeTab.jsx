import css from './HomeTab.module.css';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

const HomeTab = () => {
  return (
    <>
      <div className={css.homeTab}>HomeTab</div>
      <ButtonAddTransactions />
    </>
  );
};

export default HomeTab;
