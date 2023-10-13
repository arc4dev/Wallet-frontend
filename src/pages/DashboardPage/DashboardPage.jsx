import React, { useEffect } from 'react';
import ReactMedia from 'react-media';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

import { Outlet } from 'react-router-dom';

import css from './DashboardPage.module.css';
import svg from '../../assets/icons/icons.svg';
import Currency from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from 'redux/finance/operations';
import Loader from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/finance/selectors';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  // On mount
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return isLoading ? (
    <div className={css.dashboardLoader}>
      <Loader />
    </div>
  ) : (
    <div className={`container ${css.dashboard}`}>
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
              <>
                {/* <h2>Mobile View</h2> */}
                <Header />
                <div className={css.mobileWrapper}>
                  <Navigation />
                </div>

                <Outlet />
              </>
            )}
            {matches.medium && (
              <>
                {/* <h2>Tablet View</h2> */}
                {/* Elementy SVG z odpowiednimi klasami */}
                <svg className={`${css.background} ${css.right}`}>
                  <use xlinkHref={`${svg}#icon-Ellipse-2`}></use>
                </svg>

                <svg className={`${css.background} ${css.left}`}>
                  <use xlinkHref={`${svg}#icon-Ellipse-1`}></use>
                </svg>

                <Header />
                <div className={css.dasboardContainersWrapper}>
                  <div className={css.dashboardOverviewWrapper}>
                    <div className={css.nav}>
                      <Navigation />
                      <Balance />
                    </div>
                    <Currency />
                  </div>

                  <Outlet />
                </div>
              </>
            )}
            {matches.large && (
              <>
                {/* <h2>Desktop View</h2> */}
                {/* Elementy SVG z odpowiednimi klasami */}
                <div className={css.center}>
                  <svg className={`${css.background} ${css.right}`}>
                    <use xlinkHref={`${svg}#icon-Ellipse-2`}></use>
                  </svg>
                  <svg className={`${css.background} ${css.left}`}>
                    <use xlinkHref={`${svg}#icon-Ellipse-1`}></use>
                  </svg>

                  <Header />
                  <div className={css.dasboardContainersWrapper}>
                    <div className={css.dashboardOverviewWrapper}>
                      <Navigation />
                      <Balance />
                      <Currency />
                    </div>

                    <Outlet />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </ReactMedia>
    </div>
  );
};

export default DashboardPage;
