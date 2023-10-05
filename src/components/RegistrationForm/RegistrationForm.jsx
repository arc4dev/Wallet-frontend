import * as React from 'react';
import TextField from '@mui/material/TextField';
import css from './RegistrationForm.module.css';
import { Button, InputAdornment, StyledEngineProvider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import svg from '../../assets/icons/icons.svg';

const RegistrationForm = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className={css.wrapper}>
        <div className={css.form}>
          <div className={css.logo}>
            <svg width="120" height="30">
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
            <TextField
              id="check-password"
              placeholder="Confirm password"
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
            <TextField
              id="name"
              variant="standard"
              placeholder="First name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxIcon className={css.icon} />
                  </InputAdornment>
                ),
              }}
              className={css.textField}
            />
          </div>
          <div className={css.btnWrapper}>
            <Button variant="contained" className={`${css.button} ${css.filled}`}>
              Register
            </Button>
            <Button variant="outlined" className={css.button}>
              Log in
            </Button>
          </div>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default RegistrationForm;
