import { Button, StyledEngineProvider } from '@mui/material';
import svg from '../../assets/icons/icons.svg';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={css.wrapper}>
        <div className={css.error}>
          <svg className={css.icon}>
            <use xlinkHref={`${svg}#icon-group-404`}></use>
          </svg>
          <h3 className={css.error__header}>Page not found</h3>
          <p className={css.error__description}>
            Oops! We couldn't find the page that you're looking for! Please check the address and
            try again!
          </p>

          <Button variant="contained" className={`${css.button} ${css.filled}`}>
            Go back home
          </Button>
        </div>

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

export default NotFoundPage;
