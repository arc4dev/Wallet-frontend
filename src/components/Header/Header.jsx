import ModalLogout from 'components/ModalLogout/ModalLogout';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <div className={css.header}>Header
      <ModalLogout/>
      </div>
    </>
  );
};
export default Header;
