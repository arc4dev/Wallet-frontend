import { useEffect, useState } from 'react';
import css from './Currency.module.css';
import ReactMedia from 'react-media';
import Loader from 'components/Loader/Loader';
import { toggleStateOf } from 'redux/global/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/global/selectors';

const Currency = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const useCurrencies = ['USD', 'PLN'];
  const spread = 0.0299;

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        console.log(process.env.REACT_APP_EXCHANGE_API_KEY);
        const res = await fetch(
          `https://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_EXCHANGE_API_KEY}`
        );
        const data = await res.json();

        if (data.success !== 'false') setExchangeRates(data.rates);
        else console.log(data);
      } catch (err) {
        console.log('API request failed:', err);
      }
    };
    fetchCurrencyRates();
  }, []);

  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(toggleStateOf('isLoading'));
  }, [dispatch]);

  const sellRate = buy => {
    const sell = buy / (1 - spread);
    return sell.toFixed(2);
  };

  return (
    <div className={css.currency_wrapper}>
      <div className={css.currency}>
        <ReactMedia
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1279px)',
            large: '(min-width: 1280px)',
          }}
        >
          {matches => (
            <>
              {matches.small && (
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
              )}

              {matches.medium && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="336"
                  height="119"
                  viewBox="0 0 336 119"
                  fill="none"
                  className={css.svg}
                >
                  <path
                    d="M26.88 49.346L0 79.1794V99C0 110.046 8.95431 119 20 119H306C322.569 119 336 105.569 336 89V25.8173C334.776 25.0049 332.993 24.7335 332.237 24.6699C326.345 24.1747 322.966 28.8979 318.259 33.2757L318.201 33.33C316.81 34.6252 313.33 37.8654 306.97 37.8654C300.518 37.8654 296.038 34.8056 294.605 33.2757L273.101 9.17949C270.234 6.11966 263.962 0 256.973 0C249.984 0 244.429 6.11966 241.92 9.17949L142.464 111.881C140.851 113.794 135.905 117.618 129.024 117.618C122.143 117.618 117.197 113.794 115.584 111.881L58.0608 46.4774C56.0896 44.1825 50.3194 39.5928 43.008 39.5928C35.6966 39.5928 29.2096 46.0949 26.88 49.346Z"
                    fill="url(#paint0_linear_5_2750)"
                    fillOpacity="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_2750"
                      x1="168"
                      y1="-10.3207"
                      x2="168"
                      y2="138.297"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {matches.large && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="393"
                  height="118"
                  viewBox="0 0 393 118"
                  fill="none"
                  className={css.svg}
                >
                  <path
                    d="M31.44 42.1037L0 67.5585V98C0 109.046 8.9543 118 20 118H363C379.569 118 393 104.569 393 88V22.0282C391.568 21.335 389.483 21.1035 388.598 21.0492C381.707 20.6267 377.754 24.6567 372.25 28.3919L372.181 28.4384C370.554 29.5435 366.484 32.3081 359.045 32.3081C351.499 32.3081 346.259 29.6973 344.582 28.3919L319.43 7.83226C316.077 5.22151 308.741 0 300.566 0C292.392 0 285.894 5.22151 282.96 7.83226L166.632 95.461C164.746 97.0927 158.961 100.356 150.912 100.356C142.863 100.356 137.078 97.0927 135.192 95.461L67.9104 39.6561C65.6048 37.6981 58.8557 33.7819 50.304 33.7819C41.7523 33.7819 34.1648 39.3298 31.44 42.1037Z"
                    fill="url(#paint0_linear_4_436)"
                    fillOpacity="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4_436"
                      x1="196.5"
                      y1="-8.80597"
                      x2="196.5"
                      y2="118"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </>
          )}
        </ReactMedia>

        <table className={css.table}>
          <thead className={css['table-header']}>
            <tr className={css['header-data']}>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sell</th>
            </tr>
          </thead>
          <tbody className={css['table-body']}>
            {loading ? (
              <tr colSpan="3" className={css.loader_wrapper}>
                <Loader />
              </tr>
            ) : (
              useCurrencies.map(currency => {
                // Check if exchangeRates object exists and has the currency
                const purchaseRate = exchangeRates && exchangeRates[currency];

                return (
                  <tr key={currency} className={css['table-data']}>
                    <td>{currency}</td>
                    <td>{purchaseRate ? parseFloat(purchaseRate).toFixed(2) : 'N/A'}</td>
                    <td>{purchaseRate ? sellRate(purchaseRate) : 'N/A'}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Currency;
