import React from 'react';
import css from './Table.module.css';
import ChartComponent from 'components/Chart/Chart';

// Funkcje obliczeniowe
const calculateTotalIncome = transactionsList => {
  return transactionsList
    .filter(transaction => transaction.type === '+')
    .reduce((total, transaction) => total + transaction.sum, 0);
};

const calculateTotalExpensesByCategory = (transactionsList, categories) => {
  const groupedTransactions = transactionsList.reduce((grouped, transaction) => {
    const { category, type, sum } = transaction;

    if (category.toLowerCase() !== 'income') {
      const categoryKey = category.toLowerCase();

      if (!grouped[categoryKey]) {
        grouped[categoryKey] = {
          sum: 0,
          cssClass: `category-${categoryKey}`,
          color: getCategoryColor(categoryKey),
        };
      }

      grouped[categoryKey].sum += type === '-' ? sum : 0;
    }

    return grouped;
  }, {});

  const totalExpensesByCategory = categories
    ? Object.entries(groupedTransactions).map(([category, { sum, cssClass, color }]) => ({
        category,
        sum,
        cssClass,
        color,
      }))
    : [];
  return totalExpensesByCategory;
};

const getCategoryColor = categoryKey => {
  // Mapa kolorów dla kategorii
  const categoryColors = {
    // income: '#36A2EB',
    products: '#FFD8D0',
    car: '#FD9498',
    'self care': '#C5BAFF',
    'child care': '#6E78E8',
    'household products': '#4A56E2',
    education: '#81E1FF',
    leisure: '#24CCA7',
    'other expenses': '#00AD84',
    'main expenses': '#FED057',
    entertainment: '#9966FF',
    // Dodaj pozostałe kategorie
  };
  return categoryColors[categoryKey.toLowerCase()];
  // return categoryColors[categoryKey] || '#000000'; // Domyślny kolor, gdy kategoria nie istnieje w mapie
};

const calculateTotalExpenses = transactionsList => {
  return transactionsList
    .filter(transaction => transaction.type === '-')
    .reduce((total, transaction) => total - transaction.sum, 0);
};

const Table = ({ transactionsList, categories = [] }) => {
  const totalIncome = calculateTotalIncome(transactionsList);

  // Poprawiono funkcję calculateTotalExpensesByCategory, aby przyjmowała transactionsList i categories
  const totalExpensesByCategory = calculateTotalExpensesByCategory(transactionsList, categories);

  // Określenie formatu liczby
  const formatNumber = number => {
    const formattedNumber = number
      .toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(',', ' ');

    return number < 0 ? formattedNumber.slice(1) : formattedNumber;
  };
  // Tworzenie wierszy tabeli na podstawie danych o transakcjach

  const rows = totalExpensesByCategory.map(({ category, sum, cssClass, color }) => (
    <tr key={category} className={`${css.table_rows} ${css.category} ${cssClass}`}>
      <td className={css.table_items}>
        <div className={`${css['category-container']}`}>
          <div className={`${css['color-box']}`} style={{ backgroundColor: color }}></div>
          <span className={css['category-name']}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      </td>
      <td className={css.sum}>{formatNumber(sum)}</td>
    </tr>
  ));
  // Obliczanie sumy ogólnej wydatków i przychodów
  const totalExpenses = calculateTotalExpenses(transactionsList);

  // Dodawanie wierszy z sumą wydatków i przychodów do tabeli
  rows.push(
    <tr key="expenses-total" className={`${css.table_rows} ${css['total-row']}`}>
      <td>Expenses:</td>
      <td>{formatNumber(totalExpenses)}</td>
    </tr>,
    <tr key="income-total" className={`${css.table_rows} ${css['total-row']}`}>
      <td>Income:</td>
      <td>{formatNumber(totalIncome)}</td>
    </tr>
  );
  // console.log('totalExpensesByCategory:', totalExpensesByCategory);
  // console.log('totalIncome:', totalIncome);
  // Zwracanie JSX - renderowanie tabeli i komponentu ChartComponent
  return (
    <div className={css.statsWrapper}>
      <table className={css.statisticsTable}>
        <thead>
          <tr className={`${css.table_rows} ${css.headerTable}`}>
            <th className={css.headerHelper}>Category</th>
            <th className={css.headerHelper}>Sum</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      {/* Renderowanie komponentu ChartComponent z przekazanymi danymi */}

      <ChartComponent totalIncome={totalIncome} totalExpensesByCategory={totalExpensesByCategory} />
    </div>
  );
};

export default Table;
