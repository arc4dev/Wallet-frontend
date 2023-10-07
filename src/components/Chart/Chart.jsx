import React, { useRef, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import TransactionsList from 'components/DiagramTab/TransactionsList';
import css from './Chart.module.css';

// const ChartComponent = ({ transactionsList }) => {
//   const chartRef = useRef(null);
//   let chartData = null;
//   useEffect(() => {
//     if (!transactionsList || !transactionsList.length) {
//       console.log('No transactionsList data.');
//       return;
//     }

//     console.log('TransactionsList:', transactionsList);

//     const categories = [
//       'Products',
//       'Car',
//       'Self care',
//       'Child care',
//       'Household products',
//       'Education',
//       'Leisure',
//       'Other expenses',
//       'Main expenses',
//       'Entertainment',
//     ];

//     console.log('Categories:', categories);

//     const totalIncome = transactionsList.reduce(
//       (sum, transaction) => (transaction.type === '+' ? sum + transaction.sum : sum),
//       0
//     );

//     console.log('Total Income:', totalIncome);

//     const totalExpensesByCategory = [];

//     for (const category of categories) {
//       const categoryExpenses = transactionsList.reduce(
//         (sum, transaction) =>
//           transaction.category === category && transaction.type === '-'
//             ? sum + transaction.sum
//             : sum,
//         0
//       );

//       totalExpensesByCategory.push(categoryExpenses);
//     }

//     console.log('Total Expenses by Category:', totalExpensesByCategory);

//     const chartData = {
//       labels: [...categories],
//       datasets: [
//         {
//           data: [totalIncome, ...(totalExpensesByCategory || [])],
//           backgroundColor: [
//             '#36A2EB', // Income
//             '#FFD8D0', // Products
//             '#FD9498', // Car
//             '#C5BAFF', // Self care
//             '#6E78E8', // Child care
//             '#4A56E2', // Household products
//             '#81E1FF', // Education
//             '#24CCA7', // Leisure
//             '#00AD84', // Other expenses
//             '#FED057', // Main expenses
//             '#9966FF', // Entertainment
//           ],
//           hoverBackgroundColor: [
//             '#36A2EB', // Income
//             '#FFD8D0', // Products
//             '#FD9498', // Car
//             '#C5BAFF', // Self care
//             '#6E78E8', // Child care
//             '#4A56E2', // Household products
//             '#81E1FF', // Education
//             '#24CCA7', // Leisure
//             '#00AD84', // Other expenses
//             '#FED057', // Main expenses
//             '#9966FF', // Entertainment
//           ],
//         },
//       ],
//     };
//     console.log('Data for Chart:', chartData);

//     if (chartRef.current) {
//       const chartInstance = chartRef.current.chartInstance;
//       chartInstance.destroy(); // Destroy the previous chart instance
//       const newChartInstance = new Chart(chartRef.current, {
//         type: 'doughnut',
//         data: chartData,
//       });
//     }
//   }, [transactionsList]);

//   return (
//     <div>
//       <h2>Chart</h2>
//       <Doughnut ref={chartRef} data={chartData || {}} />
//     </div>
//   );
// };

const ChartComponent = ({ transactionsList, groupedTransactions }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!groupedTransactions) {
      console.log('No groupedTransactions data.');
      return;
    }

    const categories = Object.keys(groupedTransactions);
    const expenses = Object.values(groupedTransactions);

    const totalIncome = transactionsList.reduce(
      (sum, transaction) => (transaction.type === '+' ? sum + transaction.sum : sum),
      0
    );

    console.log('Total Income:', totalIncome);

    const totalExpensesByCategory = [];

    for (const category of categories) {
      const categoryExpenses = transactionsList.reduce(
        (sum, transaction) =>
          transaction.category === category && transaction.type === '-'
            ? sum + transaction.sum
            : sum,
        0
      );

      totalExpensesByCategory.push(categoryExpenses);
    }

    const chartData = {
      labels: [...categories],
      datasets: [
        {
          data: [totalIncome, ...(totalExpensesByCategory || [])],
          backgroundColor: [
            '#36A2EB', // Income
            '#FFD8D0', // Products
            '#FD9498', // Car
            '#C5BAFF', // Self care
            '#6E78E8', // Child care
            '#4A56E2', // Household products
            '#81E1FF', // Education
            '#24CCA7', // Leisure
            '#00AD84', // Other expenses
            '#FED057', // Main expenses
            '#9966FF', // Entertainment
          ],
          hoverBackgroundColor: [
            '#36A2EB', // Income
            '#FFD8D0', // Products
            '#FD9498', // Car
            '#C5BAFF', // Self care
            '#6E78E8', // Child care
            '#4A56E2', // Household products
            '#81E1FF', // Education
            '#24CCA7', // Leisure
            '#00AD84', // Other expenses
            '#FED057', // Main expenses
            '#9966FF', // Entertainment
          ],
        },
      ],
    };
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'doughnut',
        data: chartData,
      });
    }
  }, [groupedTransactions, transactionsList]);

  return (
    <div>
      <h2>Chart</h2>
      <Doughnut ref={chartRef} data={{}} />
    </div>
  );
};
export default ChartComponent;
