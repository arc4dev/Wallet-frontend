import * as React from 'react';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import css from './RegistrationForm.module.css';
import { Button, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import svg from '../../assets/icons/icons.svg';
import { useFormik } from 'formik';
import PasswordStrengthMeter from 'components/PasswordStrengthMeter/PasswordStrengthMeter';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/Auth/operations';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { resetAuthError } from 'redux/Auth/slice';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .required('Password is required')
    .test('no-spaces', 'Password cannot contain spaces', value => !/\s/.test(value)),
  checkPassword: yup
    .string('Enter your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
  name: yup.string('Enter your name').required('Name is required'),
});

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authErr, created } = useAuth();

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

  useEffect(() => {
    const notify = () => {
      toast.success('Account created! Verify you email now!', {
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

    if (created) {
      notify();

      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 3000);
    }
  }, [created, navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      checkPassword: '',
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      const registerElements = {
        email: values.email,
        name: values.name,
        password: values.password,
        passwordConfirm: values.checkPassword,
      };

      dispatch(registerUser(registerElements));
    },
  });

  return (
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
            <PasswordStrengthMeter password={formik.values.password} />
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
              value={formik.values.name.trim()}
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
        <Button
          variant="outlined"
          className={`${css.button} ${css.outlined}`}
          type="submit"
          to="/login"
          component={NavLink}
        >
          Log in
        </Button>
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
    </div>
  );
};

export default RegistrationForm;
