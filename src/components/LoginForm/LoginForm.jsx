import * as React from 'react';
import TextField from '@mui/material/TextField';
import css from './LoginForm.module.css';
import { Button, InputAdornment, StyledEngineProvider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import svg from '../../assets/icons/icons.svg';

const LoginForm = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={css.wrapper}>
        <div className={css.form}>
          <div className={css.logo}>
            <svg className={css.logoDimensions}>
              <use xlinkHref={`${svg}#icon-logo`}></use>
            </svg>
          </div>
          <div className={css.textFieldWrapper}>
            <TextField
              id="email"
              variant="standard"
              placeholder="E-mail"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon className={css.icon} />
                  </InputAdornment>
                ),
              }}
              className={css.textField}
            />
            <TextField
              id="password"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon className={css.icon} />
                  </InputAdornment>
                ),
              }}
              className={css.textField}
            />
          </div>
          <div className={css.btnWrapper}>
            <Button variant="contained" className={`${css.button} ${css.filled}`}>
              Log in
            </Button>
            <Button variant="outlined" className={`${css.button} ${css.outlined}`}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default LoginForm;
