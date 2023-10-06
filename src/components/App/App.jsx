import React from 'react';
import css from './App.module.css';
import Navigation from 'components/Navigation/Navigation';

export const App = () => {
  return (
    <div>
      <Navigation />
      <div className={css.box}>Projekt Wallet :D</div>
    </div>
  );

