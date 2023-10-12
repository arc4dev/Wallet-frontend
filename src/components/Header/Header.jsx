import ModalLogout from 'components/ModalLogout/ModalLogout';
import css from './Header.module.css';
import svg from '../../assets/icons/icons.svg';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/selectors';

const Header = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <div className={css.header}>
        <div className={css.logo}>
          <svg className={css.logo__svg}>
            <use xlinkHref={`${svg}#icon-logo`}></use>
          </svg>
        </div>
        <ModalLogout name={user.name} />
      </div>
    </>
  );
};
export default Header;
