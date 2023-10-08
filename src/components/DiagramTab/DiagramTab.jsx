import React from 'react';

import TransactionsList from './TransactionsList';
import Table from 'components/Table/Table';
import css from './DiagramTab.module.css';
// import ChartComponent from 'components/Chart/Chart';

const DiagramTab = ({ categories, transactionsList }) => {
  return (
    <div className={css.diagramTab}>
      <h4 className={css.title}>Statistics</h4>
      <div className={css.diagramWrapper}>
        <Table transactionsList={TransactionsList} categories={categories} />
      </div>
    </div>
  );
};
export default DiagramTab;
