import React from 'react';
import css from './DiagramTab.module.css';
import TransactionsList from './TransactionsList';
import Table from 'components/Table/Table';
import ChartComponent from 'components/Chart/Chart';

const DiagramTab = () => {
  return (
    <div className={css.diagramTab}>
      Statistics
      <Table transactionsList={TransactionsList} />
      {/* <ChartComponent transactionsList={TransactionsList} /> */}
    </div>
  );
};
export default DiagramTab;
