import React, { Component } from 'react';
import ReactMedia from 'react-media';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

import { Outlet } from 'react-router-dom';

import css from './DashboardPage.module.css';
import svg from '../../assets/icons/icons.svg';
import Currency from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

class DashboardPage extends Component {
  componentDidMount() {
    this.fetchBalance();
    this.fetchHeader();
    this.fetchNavigation();
  }

  fetchBalance() {
    fetch('/api/balance')
      .then(response => response.json())
      .then(data => {
        //Tu można aktualizować stan aplikacji z pobranymi danymi
        // console.log('Stan balansu:', data);
      })
      .catch(error => {
        // console.error('Błąd podczas pobierania stanu balansu:', error);
      });
  }
  fetchHeader() {
    fetch('/api/header')
      .then(response => response.json())
      .then(data => {
        //Tu można aktualizować stan aplikacji z pobranymi danymi
        // console.log('Dane nagłówka:', data);
      })
      .catch(error => {
        // console.error('Błąd podczas pobierania danych nagłówka:', error);
      });
  }
  fetchNavigation() {
    fetch('/api/navigation')
      .then(response => response.json())
      .then(data => {
        //Tu można aktualizować stan aplikacji z pobranymi danymi
        // console.log('Dane nawigacji:', data);
      })
      .catch(error => {
        // console.error('Błąd podczas pobierania danych nawigacji:', error);
      });
  }

  render() {
    return (
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
                  {/* <Header />
                  <Navigation />
                  <Outlet /> */}
                  <ModalAddTransaction />
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
                  {/* 
                  <Header />
                  <div className={css.dasboardContainersWrapper}>
                    <div className={css.dashboardOverview}>
                      <div>
                        <Navigation />
                        <Balance />
                      </div>
                      <Currency />
                    </div>
                    <Outlet />
                  </div> */}
                  <ModalAddTransaction />
                </>
              )}
              {matches.large && (
                <>
                  {/* <h2>Desktop View</h2> */}
                  {/* Elementy SVG z odpowiednimi klasami */}
                  <svg className={`${css.background} ${css.right}`}>
                    <use xlinkHref={`${svg}#icon-Ellipse-2`}></use>
                  </svg>

                  <svg className={`${css.background} ${css.left}`}>
                    <use xlinkHref={`${svg}#icon-Ellipse-1`}></use>
                  </svg>

                  <Header />
                  <div className={css.dasboardContainersWrapper}>
                    <div className={css.dashboardOverview}>
                      <div>
                        <Navigation />
                        <Balance />
                      </div>
                      <Currency />
                    </div>
                    <Outlet />
                  </div>
                </>
              )}
            </>
          )}
        </ReactMedia>
      </div>
    );
  }
}

export default DashboardPage;
