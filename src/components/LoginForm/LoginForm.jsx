import * as React from 'react';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import css from './LoginForm.module.css';
import { Button, InputAdornment, StyledEngineProvider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import svg from '../../assets/icons/icons.svg';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/Auth/operations';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetAuthError } from 'redux/Auth/slice';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { authErr } = useAuth();

  useEffect(() => {
    const notify = () => {
      toast.error(authErr, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    };

    if (authErr) notify();

    return () => {
      dispatch(resetAuthError());
    };
  }, [authErr, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const loginElements = {
        email: values.email,
        password: values.password,
      };

      dispatch(loginUser(loginElements));
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
            </div>
            <Button variant="contained" className={`${css.button} ${css.filled}`} type="submit">
              Log in
            </Button>
          </form>

          <Button
            variant="outlined"
            className={`${css.button} ${css.outlined}`}
            type="submit"
            to="/register"
            component={NavLink}
          >
            Register
          </Button>
        </div>
      </div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </StyledEngineProvider>
  );
};

export default LoginForm;
