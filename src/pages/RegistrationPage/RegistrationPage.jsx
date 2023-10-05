import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';
import svg from '../../assets/icons/icons.svg';
import { StyledEngineProvider } from '@mui/material';

const RegistrationPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={css.wrapper}>
        <div className={css.header}>
          <svg width="250" height="250">
            <use xlinkHref={`${svg}#icon-Group`}></use>
          </svg>
          <h3 className={css.headerTitle}>Finance App</h3>
        </div>

        <RegistrationForm />

        <svg className={`${css.background} ${css.right}`}>
          <use xlinkHref={`${svg}#icon-Ellipse-2`}></use>
        </svg>

        <svg className={`${css.background} ${css.left}`}>
          <use xlinkHref={`${svg}#icon-Ellipse-1`}></use>
        </svg>
      </div>
    </StyledEngineProvider>
  );
};

export default RegistrationPage;
