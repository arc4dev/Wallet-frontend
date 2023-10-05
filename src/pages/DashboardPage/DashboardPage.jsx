import React, { Component } from 'react';
import ReactMedia from 'react-media';
import Balance from '../../components/Balance/Balance';
// import Chart from '../../components/Chart/Chart';
import Currency from '../../components/Currency/Currency';
// import DiagramTab from '../../components/DiagramTab/DiagramTab';
import Header from '../../components/Header/Header';
import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import Navigation from '../../components/Navigation/Navigation';
import Table from '../../components/Table/Table';

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
        <h1>Dashboard</h1>
        <ReactMedia
          queries={{
            small: '(max-width: 599px)',
            medium: '(min-width: 600px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}
        >
          {matches => (
            <div>
              {matches.small && (
                <div>
                  <h2>Mobile View</h2>
                  <Header />
                  <Navigation />
                  <Balance />
                  <Table />
                  <Currency />
                  <ModalAddTransaction />
                </div>
              )}
              {matches.medium && (
                <div>
                  <h2>Tablet View</h2>
                  <Header />
                  <Navigation />
                  <Balance />
                  <Table />
                  <Currency />
                  <ModalAddTransaction />
                </div>
              )}
              {matches.large && (
                <div>
                  <h2>Desktop View</h2>
                  <Header />
                  <Navigation />
                  <Balance />
                  <Table />
                  <Currency />
                  <ModalAddTransaction />
                </div>
              )}
            </div>
          )}
        </ReactMedia>
      </div>
    );
  }
}

export default DashboardPage;
