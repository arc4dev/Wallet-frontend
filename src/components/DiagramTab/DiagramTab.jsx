import React from 'react';
import css from './DiagramTab.module.css';
import TransactionsList from './TransactionsList';
import Table from 'components/Table/Table';
import ChartComponent from 'components/Chart/Chart';

const DiagramTab = ({ categories, transactionsList }) => {
  return (
    <div className={css.diagramTab}>
      Statistics
      <Table transactionsList={TransactionsList} categories={categories} />
    </div>
  );
};
export default DiagramTab;
