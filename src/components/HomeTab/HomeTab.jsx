// import css from './HomeTab.module.css';
import Balance from 'components/Balance/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

import TableTransactions from 'components/TableTransactions/TableTransactions';
import ReactMedia from 'react-media';

const HomeTab = () => {
  return (
    <div>
      <ReactMedia
        queries={{
          mobile: '(max-width: 767px)',
          higher: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.mobile && (
              <>
                <Balance />
                <TableTransactions />
                <ButtonAddTransactions />
              </>
            )}
            {matches.higher && (
              <>
                <TableTransactions />
                <ButtonAddTransactions />
              </>
            )}
          </>
        )}
      </ReactMedia>
    </div>
  );
};

export default HomeTab;
