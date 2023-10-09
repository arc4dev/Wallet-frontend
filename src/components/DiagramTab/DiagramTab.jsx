import React, { useState } from 'react';

import TransactionsList from './TransactionsList';
import Table from 'components/Table/Table';
import css from './DiagramTab.module.css';
// import ChartComponent from 'components/Chart/Chart';

const DiagramTab = ({ categories, transactionsList }) => {
  // Dodaj stany do przechowywania wyboru miesiąca i roku
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  // Funkcja obsługująca zmianę miesiąca
  const handleMonthChange = event => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
  };

  // Funkcja obsługująca zmianę roku
  const handleYearChange = event => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
  };

  return (
    <div className={css.diagramTab}>
      <h4 className={css.title}>Statistics</h4>
      <div>
        <label>
          Month:
          <select value={selectedMonth} onChange={handleMonthChange}>
            <option value="">Select Month</option>
            {/* Dodaj opcje dla każdego miesiąca */}
          </select>
        </label>

        <label>
          Year:
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            {/* Dodaj opcje dla lat (na podstawie dostępnych danych) */}
          </select>
        </label>
      </div>
      <div className={css.diagramWrapper}>
        <Table transactionsList={TransactionsList} categories={categories} />
      </div>
    </div>
  );
};
export default DiagramTab;
