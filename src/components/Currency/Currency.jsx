import { useEffect, useState } from 'react';
import css from './Currency.module.css';
import axios from 'axios';

const Currency = () => {
  const API_KEY = ``;

  const [exchangeRates, setExchangeRates] = useState([]);
  const useCurrencies = ['USD', 'PLN'];
  const spread = 0.0299;

  // !!! gotowe tylko trzeba jeszce dodać API_KEY przez zmienne środowiskowe

  // useEffect(() => {
  //   const fetchCurrencyRates = async () => {
  //     try {
  //       const response = await axios.get(`http://data.fixer.io/api//latest?access_key=${API_KEY}`);
  //       const data = response.data;
  //       const rates = data.rates;
  //       setExchangeRates(rates);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Błąd pobierania kursów walut z API:', error);
  //     }
  //   };
  //   fetchCurrencyRates();
  // }, []);

  const sellRate = buy => {
    const sell = buy / (1 - spread);
    return sell.toFixed(2);
  };

  return (
    <>
      <div className={css.currency}>
        <svg
          className={css.svg}
          xmlns="http://www.w3.org/2000/svg"
          width="280"
          height="93"
          viewBox="0 0 280 93"
          fill="none"
        >
          <path
            d="M22.4 38.5645L0 61.8797V73C0 84.0457 8.95431 93 20 93H250C266.569 93 280 79.5686 280 63V20.1766C278.98 19.5416 277.495 19.3295 276.864 19.2798C271.954 18.8929 269.138 22.5841 265.216 26.0053L265.167 26.0478C264.008 27.06 261.108 29.5923 255.808 29.5923C250.432 29.5923 246.699 27.201 245.504 26.0053L227.584 7.17389C225.195 4.78259 219.968 0 214.144 0C208.32 0 203.691 4.78259 201.6 7.17389L118.72 87.4366C117.376 88.9312 113.254 91.9203 107.52 91.9203C101.786 91.9203 97.664 88.9312 96.32 87.4366L48.384 36.3227C46.7413 34.5292 41.9328 30.9423 35.84 30.9423C29.7472 30.9423 24.3413 36.0238 22.4 38.5645Z"
            fill="url(#paint0_linear_53401_98)"
            fillOpacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_53401_98"
              x1="140"
              y1="-8.06575"
              x2="140"
              y2="108.081"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <table className={css.table}>
          <thead className={css['table-header']}>
            <tr className={css['header-data']}>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody className={css['table-body']}>
            {useCurrencies.map(currency => {
              return (
                <tr key={currency} className={css['table-data']}>
                  <td>{currency}</td>
                  <td>{parseFloat(exchangeRates[currency]).toFixed(2)}</td>
                  <td>{sellRate(exchangeRates[currency])}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Currency;
