import Currency from 'components/Currency/Currency';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.box}>
      Projekt Wallet :D
      <Currency />
    </div>
  );
};
