import React, { useState } from 'react';

import Table from 'components/Table/Table';
import css from './DiagramTab.module.css';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/finance/selectors';
// import ChartComponent from 'components/Chart/Chart';

const DiagramTab = () => {
  // Dodaj stany do przechowywania wyboru miesiąca i roku
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // TransactionsList trzeba będzie zamienić na to co otrzymamy z backendu
  const list = useSelector(selectTransactions);

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

  list.forEach(dateFromList => {
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

  return (
    <div className={css.diagramTab}>
      <div className={css.container}>
        <h3 className={css.title}>Statistics</h3>
        <div className={css.filterContainer}>
          <label>
            <select className={css.selectButton} value={selectedMonth} onChange={handleMonthChange}>
              <option value="">Month select</option>
              {uniqueMonths.map(showMonth => (
                <option value={showMonth}>{showMonth}</option>
              ))}
            </select>
          </label>

          <label>
            <select className={css.selectButton} value={selectedYear} onChange={handleYearChange}>
              <option value="">Year select</option>
              {uniqueYears.map(showYear => (
                <option key={showYear} value={showYear}>
                  {showYear}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className={css.diagramWrapper}>
        {/* Dodaj nowy kontener dla tabeli */}
        <div className={css.statisticsContainer}>
          {/* Przekazujemy również selectedMonth i selectedYear do Table */}
          {/* Dodajemy warunek sprawdzający, czy dane są dostępne */}

          {(!selectedMonth && !selectedYear) || filteredTransactionsList.length > 0 ? (
            <Table
              transactionsList={!selectedMonth && !selectedYear ? list : filteredTransactionsList}
            />
          ) : (
            <p>No data available for the selected period.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default DiagramTab;
