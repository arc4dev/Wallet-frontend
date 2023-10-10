import React, { useState } from 'react';

import TransactionsList from './TransactionsList';
import Table from 'components/Table/Table';
import css from './DiagramTab.module.css';
// import ChartComponent from 'components/Chart/Chart';

const DiagramTab = () => {
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

  const years = [];
  const months = [];

  // TransactionsList trzeba będzie zamienić na to co otrzymamy z backendu
  const list = TransactionsList;

  list.map(dateFromList => {
    const date = new Date(dateFromList.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });

    years.push(year);
    months.push(month);
  });

  const uniqueYears = [...new Set(years)];
  const uniqueMonths = [...new Set(months)];

  if (!selectedMonth && !selectedYear) {
  }

  const filteredTransactionsList = list.filter(value => {
    const date = new Date(value.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });

    if (!selectedMonth) {
      return year === +selectedYear;
    } else if (!selectedYear) {
      return month === selectedMonth;
    } else {
      return year === +selectedYear && month === selectedMonth;
    }
  });

  console.log('filtered', filteredTransactionsList);

  return (
    <div className={css.diagramTab}>
      <h4 className={css.title}>Statistics</h4>
      <div>
        <label>
          Month:
          <select value={selectedMonth} onChange={handleMonthChange}>
            <option value="">Select Month</option>
            {uniqueMonths.map(showMonth => (
              <option value={showMonth}>{showMonth}</option>
            ))}
          </select>
        </label>

        <label>
          Year:
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            {uniqueYears.map(showYear => (
              <option id={showYear}>{showYear}</option>
            ))}
          </select>
        </label>
      </div>
      <div className={css.diagramWrapper}>
        <Table
          transactionsList={!selectedMonth && !selectedYear ? list : filteredTransactionsList}
        />
      </div>
    </div>
  );
};
export default DiagramTab;
