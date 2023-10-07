import React from 'react';
import TransactionsList from 'components/DiagramTab/TransactionsList';
import css from './Table.module.css';

// oblicz sumę wszystkich transakcji '+'
const calculateTotalIncome = transactionsList => {
  return transactionsList
    .filter(transaction => transaction.type === '+')
    .reduce((total, transaction) => total + transaction.sum, 0);
};
// oblicz sumę wszystkich transakcji '-'
const calculateTotalExpenses = transactionsList => {
  return transactionsList
    .filter(transaction => transaction.type === '-')
    .reduce((total, transaction) => total - transaction.sum, 0);
};

const Table = ({ transactionsList }) => {
  const groupedTransactions = transactionsList.reduce((grouped, transaction) => {
    const { category, type, sum } = transaction;

    if (category && category.toLowerCase() !== 'income') {
      const categoryKey = category.toLowerCase();

      if (!grouped[categoryKey]) {
        grouped[categoryKey] = 0;
      }

      grouped[categoryKey] += type === '-' ? sum : 0;
    }

    return grouped;
  }, {});

  const rows = Object.entries(groupedTransactions).map(([category, sum]) => (
    <tr key={category}>
      <td>{category}</td>
      <td>{sum}</td>
    </tr>
  ));

  const totalExpenses = calculateTotalExpenses(transactionsList);
  const totalIncome = calculateTotalIncome(transactionsList);

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

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
