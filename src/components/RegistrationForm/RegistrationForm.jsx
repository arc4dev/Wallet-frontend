import * as React from 'react';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import css from './RegistrationForm.module.css';
import { Button, InputAdornment, StyledEngineProvider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import svg from '../../assets/icons/icons.svg';
import { useFormik } from 'formik';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required'),
  checkPassword: yup
    .string('Enter your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
  name: yup.string('Enter your name').required('Name is required'),
});

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      checkPassword: '',
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <div className={css.wrapper}>
        <div className={css.formWrapper}>
          <div className={css.logo}>
            <svg className={css.logoDimensions}>
              <use xlinkHref={`${svg}#icon-logo`}></use>
            </svg>
          </div>
          <form onSubmit={formik.handleSubmit} className={css.form}>
            <div className={css.textFieldWrapper}>
              <TextField
                id="email"
                name="email"
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="password"
                name="password"
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                id="checkPassword"
                name="checkPassword"
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
                value={formik.values.checkPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.checkPassword && Boolean(formik.errors.checkPassword)}
                helperText={formik.touched.checkPassword && formik.errors.checkPassword}
              />
              <TextField
                id="name"
                name="name"
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
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <Button variant="contained" className={`${css.button} ${css.filled}`} type="submit">
              Register
            </Button>
          </form>
          <Button variant="outlined" className={`${css.button} ${css.outlined}`} type="submit">
            Log in
          </Button>
        </div>
      </div>
    </StyledEngineProvider>
  );
};

export default RegistrationForm;
