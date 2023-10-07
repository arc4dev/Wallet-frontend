import DashboardPage from 'pages/DashboardPage/DashboardPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import React from 'react';
import css from './App.module.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeTab from 'components/HomeTab/HomeTab';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import Currency from 'components/Currency/Currency';
import NotFoundPage from 'pages/NotFound/NotFoundPage';

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route index path="" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="home" element={<HomeTab />} />
          <Route path="statistics" element={<DiagramTab />} />
          <Route path="currency" element={<Currency />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
