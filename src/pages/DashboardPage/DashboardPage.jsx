import React, { Component } from 'react';
import ReactMedia from 'react-media';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

import { Outlet } from 'react-router-dom';

class DashboardPage extends Component {
  componentDidMount() {
    this.fetchBalance();
    this.fetchChart();
    this.fetchCurrency();
    this.fetchDiagramTab();
    this.fetchHeader();
    this.fetchModalAddTransaction();
    this.fetchNavigation();
    this.fetchTable();
  }

  fetchBalance() {
    //dodać logikę do pobierania stanu balansu z serwera lub API
    //używając fetch lub Axios
  }
  fetchChart() {
    //dodać logikę do pobierania stanu balansu z serwera lub API
    //używając fetch lub Axios
  }
  fetchCurrency() {
    //dodać logikę do pobierania stanu balansu z serwera lub API
    //używając fetch lub Axios
  }
  fetchDiagramTab() {
    //dodać logikę do pobierania stanu balansu z serwera lub API
    //używając fetch lub Axios
  }
  fetchHeader() {
    //dodać logikę do pobierania stanu balansu z serwera lub API
    //używając fetch lub Axios
  }
  fetchModalAddTransaction() {
    //dodać logikę do pobierania stanu balansu z serwera lub API
    //używając fetch lub Axios
  }
  fetchNavigation() {
    //dodać logikę do pobierania stanu balansu z serwera lub API
    //używając fetch lub Axios
  }
  fetchTable() {
    //dodać logikę do pobierania stanu balansu z serwera lub API
    //używając fetch lub Axios
  }

  render() {
    return (
      <div>
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
                <div>
                  {/* <h2>Mobile View</h2> */}
                  <Header />
                  <Navigation />
                  <Outlet />
                </div>
              )}
              {matches.medium && (
                <div>
                  {/* <h2>Tablet View</h2> */}
                  <Header />
                  <Navigation />
                  <Outlet />
                </div>
              )}
              {matches.large && (
                <div>
                  {/* <h2>Desktop View</h2> */}
                  <Header />
                  <Navigation />
                  <Outlet />
                </div>
              )}
            </>
          )}
        </ReactMedia>
      </div>
    );
  }
}

export default DashboardPage;
