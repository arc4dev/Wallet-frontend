import ModalLogout from 'components/ModalLogout/ModalLogout';
import css from './Header.module.css';
import svg from '../../assets/icons/icons.svg';

const Header = () => {
  return (
    <>
      <div className={css.header}>
        <div className={css.logo}>
          <svg className={css.logo__svg}>
            <use xlinkHref={`${svg}#icon-logo`}></use>
          </svg>
        </div>
        <ModalLogout />
      </div>
    </>
  );
};
export default Header;
