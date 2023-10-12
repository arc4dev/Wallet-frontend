import React, { Component } from 'react';
import ReactMedia from 'react-media';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';

import { Outlet } from 'react-router-dom';

import css from './DashboardPage.module.css';
import svg from '../../assets/icons/icons.svg';
import Currency from 'components/Currency/Currency';
import Balance from 'components/Balance/Balance';
import Table from 'components/Table/Table';
// import TableTransactions from 'components/TableTransactions/TableTransactions';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

const DashboardPage = () => {
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
                <Header />
                <div className={css.mobileWrapper}>
                  <Navigation />
                  <Balance />
                  <Table />
                  <ButtonAddTransactions />
                  <Outlet />
                </div>
              </>
            )}
            {matches.medium && (
              <>
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
                  <div>
                    <Table />
                  </div>
                  <ButtonAddTransactions />
                  <Outlet />
                </div>
              </>
            )}
            {matches.large && (
              <>
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
                    <div>
                      <Table />
                    </div>
                    <ButtonAddTransactions />
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

// class DashboardPage extends Component {
//   state = {
//     balance: null,
//     transactions: [],
//   };

//   componentDidMount() {
//     this.fetchBalance();
//     this.fetchHeader();
//     this.fetchNavigation();
//   }

//   fetchBalance() {
//     fetch('/api/balance')
//       .then(response => response.json())
//       .then(data => {
//         //stan aplikacji z pobranymi danymi
//         this.setState({ balance: data.balance });
//       })
//       .catch(error => {
//         console.error('Błąd podczas pobierania stanu balansu:', error);
//       });
//   }
//   fetchHeader() {
//     fetch('/api/header')
//       .then(response => response.json())
//       .then(data => {
//         //stan aplikacji z pobranymi danymi
//         this.setState({ transactions: data.transactions });
//       })
//       .catch(error => {
//         console.error('Błąd podczas pobierania danych nagłówka:', error);
//       });
//   }
//   fetchNavigation() {
//     fetch('/api/navigation')
//       .then(response => response.json())
//       .then(data => {
//         //Tu można aktualizować stan aplikacji z pobranymi danymi
//         // console.log('Dane nawigacji:', data);
//       })
//       .catch(error => {
//         // console.error('Błąd podczas pobierania danych nawigacji:', error);
//       });
//   }

//   render() {
//     return (
//       <div className={`container ${css.dashboard}`}>
//         <ReactMedia
//           queries={{
//             small: '(max-width: 767px)',
//             medium: '(min-width: 768px) and (max-width: 1279px)',
//             large: '(min-width: 1280px)',
//           }}
//         >
//           {matches => (
//             <>
//               {matches.small && (
//                 <>
//                   {/* <h2>Mobile View</h2> */}
//                   <Header />
//                   <div className={css.mobileWrapper}>
//                     <Navigation />
//                   </div>

//                   <Outlet />
//                 </>
//               )}
//               {matches.medium && (
//                 <>
//                   {/* <h2>Tablet View</h2> */}
//                   {/* Elementy SVG z odpowiednimi klasami */}
//                   <svg className={`${css.background} ${css.right}`}>
//                     <use xlinkHref={`${svg}#icon-Ellipse-2`}></use>
//                   </svg>

//                   <svg className={`${css.background} ${css.left}`}>
//                     <use xlinkHref={`${svg}#icon-Ellipse-1`}></use>
//                   </svg>

//                   <Header />
//                   <div className={css.dasboardContainersWrapper}>
//                     <div className={css.dashboardOverviewWrapper}>
//                       <div className={css.nav}>
//                         <Navigation />
//                         <Balance balance={this.state.balance} />
//                       </div>
//                       <Currency />
//                     </div>

//                     <Outlet />
//                   </div>
//                 </>
//               )}
//               {matches.large && (
//                 <>
//                   {/* <h2>Desktop View</h2> */}
//                   {/* Elementy SVG z odpowiednimi klasami */}
//                   <div className={css.center}>
//                     <svg className={`${css.background} ${css.right}`}>
//                       <use xlinkHref={`${svg}#icon-Ellipse-2`}></use>
//                     </svg>
//                     <svg className={`${css.background} ${css.left}`}>
//                       <use xlinkHref={`${svg}#icon-Ellipse-1`}></use>
//                     </svg>

//                     <Header />
//                     <div className={css.dasboardContainersWrapper}>
//                       <div className={css.dashboardOverviewWrapper}>
//                         <Navigation />
//                         <Balance balance={this.state.balance} />
//                         <Currency />
//                       </div>

//                       <Outlet />
//                     </div>
//                   </div>
//                 </>
//               )}
//             </>
//           )}
//         </ReactMedia>
//       </div>
//     );
//   }
// }

// export default DashboardPage;
