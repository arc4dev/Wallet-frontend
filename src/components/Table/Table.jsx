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
    income: '#36A2EB',
    products: '#FFD8D0',
    car: '#FD9498',
    selfcare: '#C5BAFF',
    childcare: '#6E78E8',
    'household products': '#4A56E2',
    education: '#81E1FF',
    leisure: '#24CCA7',
    'other expenses': '#00AD84',
    'main expenses': '#FED057',
    entertainment: '#9966FF',
    // Dodaj pozostałe kategorie
  };
  return categoryColors[categoryKey.toLowerCase()];
  return categoryColors[categoryKey] || '#000000'; // Domyślny kolor, gdy kategoria nie istnieje w mapie
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

  // Tworzenie wierszy tabeli na podstawie danych o transakcjach

  const rows = totalExpensesByCategory.map(({ category, sum, cssClass, color }) => (
    <tr key={category} className={`${css.category} ${cssClass}`}>
      <td>
        <div className={`${css['color-box']}`} style={{ backgroundColor: color }}>
          {/* Pusty element */}
        </div>
      </td>
      <td>{category}</td>
      <td>{sum}</td>
    </tr>
  ));
  // Obliczanie sumy ogólnej wydatków i przychodów
  const totalExpenses = calculateTotalExpenses(transactionsList);

  // Dodawanie wierszy z sumą wydatków i przychodów do tabeli
  rows.push(
    <tr key="expenses-total">
      <td>Expenses:</td>
      <td>{totalExpenses}</td>
    </tr>,
    <tr key="income-total">
      <td>Income:</td>
      <td>{totalIncome}</td>
    </tr>
  );
  console.log('totalExpensesByCategory:', totalExpensesByCategory);
  console.log('totalIncome:', totalIncome);
  // Zwracanie JSX - renderowanie tabeli i komponentu ChartComponent
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

      {/* Renderowanie komponentu ChartComponent z przekazanymi danymi */}
      <ChartComponent totalIncome={totalIncome} totalExpensesByCategory={totalExpensesByCategory} />
    </>
  );
};

export default Table;
