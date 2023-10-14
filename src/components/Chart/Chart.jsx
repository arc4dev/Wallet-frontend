import React, { useRef, useEffect, useState } from 'react';
import css from './Chart.module.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const getCategoryColor = categoryKey => {
  // Mapa kolorów dla kategorii
  const categoryColors = {
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

// Komponent ChartComponent odpowiada za renderowanie wykresu pierścieniowego.
const ChartComponent = ({ totalIncome, totalExpensesByCategory }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState(null);
  // console.log('totalExpensesByCategory:', totalExpensesByCategory);
  // console.log('totalIncome:', totalIncome);

  // useEffect reaguje na zmiany w totalIncome i totalExpensesByCategory.
  useEffect(() => {
    // Sprawdzamy, czy dane są dostępne i nie są puste.
    if (!totalExpensesByCategory || totalExpensesByCategory.length === 0) {
      // console.log('Missing or empty data for chart.');
      return;
    }
    // Sprawdzamy, czy totalIncome jest dostępne.
    if (totalIncome === undefined) {
      // console.log('Missing totalIncome data for chart.');
      return;
    }

    // Tworzymy dane do wykresu na podstawie totalIncome i totalExpensesByCategory.
    const chartData = {
      labels: [
        ...totalExpensesByCategory
          .map(({ category }) => category)
          .filter(category => category !== 'incomes'),
      ],
      datasets: [
        {
          data: [...totalExpensesByCategory.map(({ sum }) => sum)],
          backgroundColor: [
            // Kolor dla różnych kategorii.
            ...totalExpensesByCategory.map(({ category }) => getCategoryColor(category)),
          ],
          // Kolory hover dla różnych kategorii.
          hoverBackgroundColor: [
            ...totalExpensesByCategory.map(({ category }) => getCategoryColor(category)),
          ],
          borderWidth: 0,
          cutout: '70%',
        },
      ],
    };

    // Ustawiamy dane do wykresu w stanie komponentu.
    setChartData(chartData);
  }, [totalIncome, totalExpensesByCategory]);

  // Renderujemy div z klasą 'chart-container',
  // zawierający tytuł 'Chart' i wykres (jeśli dane są dostępne).
  return (
    <div className={css['chart-container']}>
      {chartData && chartData.labels.length > 0 ? (
        <Doughnut ref={chartRef} data={chartData} />
      ) : (
        <p>No data available for the selected period.</p>
      )}
    </div>
  );
};

export default ChartComponent;
