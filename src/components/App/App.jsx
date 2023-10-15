import DashboardPage from 'pages/DashboardPage/DashboardPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import React, { useEffect } from 'react';
import css from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeTab from 'components/HomeTab/HomeTab';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import { StyledEngineProvider } from '@mui/material';
import NotFoundPage from 'pages/NotFound/NotFoundPage';
import ProtectedRoute from 'utils/ProtectedRoute';
import { RestrictedRoute } from 'utils/RestrictedRoute';
import { refreshUser } from 'redux/Auth/operations';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.appLoader}>
      <Loader />
    </div>
  ) : (
    <StyledEngineProvider injectFirst>
      <div className={css.container}>
        <Routes>
          <Route index path="" element={<Navigate to="/dashboard/home" />} />

          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DashboardPage />}>
              <Route path="home" element={<HomeTab />} />
              <Route path="statistics" element={<DiagramTab />} />
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
