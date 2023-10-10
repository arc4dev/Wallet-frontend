import css from './LoginPage.module.css';
import svg from '../../assets/icons/icons.svg';
import { StyledEngineProvider } from '@mui/material';
import LoginForm from 'components/LoginForm/LoginForm';
import frame from '../../assets/icons/frame-login.svg';

const LoginPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={`container ${css.loginPage}`}>
        <svg className={`${css.background} ${css.right}`}>
          <use xlinkHref={`${svg}#icon-Ellipse-2`}></use>
        </svg>

        <svg className={`${css.background} ${css.left}`}>
          <use xlinkHref={`${svg}#icon-Ellipse-1`}></use>
        </svg>
        <div className={css.wrapper}>
          <div className={css.header}>
            <img className={css.image} src={frame} alt="frame" />
            <h3 className={css.headerTitle}>Finance App</h3>
          </div>

          <div className={css.formContainer}>
            <div className={css.form}>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};
export default LoginPage;
