import DashboardPage from 'pages/DashboardPage/DashboardPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import React, { useEffect } from 'react';
import css from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeTab from 'components/HomeTab/HomeTab';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import Currency from 'components/Currency/Currency';
import { StyledEngineProvider } from '@mui/material';
import NotFoundPage from 'pages/NotFound/NotFoundPage';
import ProtectedRoute from 'utils/ProtectedRoute';
import { RestrictedRoute } from 'utils/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

export const App = () => {
  // On mount
  // const dispatch = useDispatch();
  // const { isAuth } = useAuth();

  // useEffect(() => {
  //   console.log(isAuth);
  // }, [isAuth, dispatch]);

  return (
    <StyledEngineProvider injectFirst>
      <div className={css.container}>
        <Routes>
          <Route index path="" element={<Navigate to="/dashboard/home" />} />

          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DashboardPage />}>
              <Route path="home" element={<HomeTab />} />
              <Route path="statistics" element={<DiagramTab />} />
              <Route path="currency" element={<Currency />} />
            </Route>
          </Route>

          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/dashboard/home" component={<LoginPage />} />}
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/dashboard/home" component={<RegistrationPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </StyledEngineProvider>
  );
};
