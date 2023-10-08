import React from 'react';

import transactionsList from './TransactionsList';
import Table from 'components/Table/Table';
import css from './DiagramTab.module.css';
// import ChartComponent from 'components/Chart/Chart';

const DiagramTab = ({ categories, transactionsList }) => {
  return (
    <div className={css.diagramTab}>
      Statistics
      <Table transactionsList={transactionsList} categories={categories} />
    </div>
  );
};
export default DiagramTab;
