import React from 'react';
import css from './DiagramTab.module.css';
import TransactionsList from './TransactionsList';
import Table from 'components/Table/Table';
import ChartComponent from 'components/Chart/Chart';

const DiagramTab = () => {
  const transactionsList = TransactionsList;
  return (
    <div className={css.diagramTab}>
      Statistics
      <Table transactionsList={TransactionsList} />
      {/* <ChartComponent transactionsList={transactionsList} /> */}
    </div>
  );
};
export default DiagramTab;
