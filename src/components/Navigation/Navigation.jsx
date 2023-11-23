import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BiStats, BiSolidHome } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import Media from 'react-media';
import styled from 'styled-components';
import Currency from 'components/Currency/Currency';
import { useState } from 'react';

const StyledLink = styled(NavLink)`
  &.active {
    box-shadow: 0px 3px 10px 0px #4a56e280;
    border-radius: 8px;
    filter: contrast(112%);
  }
`;

const StyledText = styled(NavLink)`
  &.active {
    font-weight: 700;
  }
`;

const Navigation = () => {
  const [isCurrencyDisplay, setCurrencyDisplay] = useState(false);

  const showCurrency = () => setCurrencyDisplay(true);
  const hideCurrency = () => setCurrencyDisplay(false);

  return (
    <>
      <IconContext.Provider
        value={{
          color: 'var(--progressBar-background)',
          size: '2.38em',
          style: {
            padding: '8px',
            background: 'var(--color-brand)',
            display: 'flex',
            borderRadius: '8px',
            opacity: '90%',
          },
        }}
      >
        <Media
          query="(max-width: 767px)"
          render={() => (
            <nav className={css.navigation}>
              <div className={css.nav_link}>
                <StyledLink to="/dashboard/home" onClick={hideCurrency}>
                  <BiSolidHome />
                </StyledLink>
              </div>
              <div className={css.nav_link}>
                <StyledLink to="/dashboard/statistics" onClick={hideCurrency}>
                  <BiStats />
                </StyledLink>
              </div>
              <StyledLink to="/dashboard">
                <FaDollarSign onClick={showCurrency} />
                <div className={isCurrencyDisplay ? css.currencyDisplay : css.currency}>
                  <Currency />
                </div>
              </StyledLink>
            </nav>
          )}
        />
      </IconContext.Provider>

      <Media
        query="(min-width: 768px)"
        render={() => (
          <IconContext.Provider
            value={{
              color: 'var(--progressBar-background)',
              size: '1.13em',
              style: {
                padding: '3px',
                background: 'var(--color-brand)',
                display: 'flex',
                borderRadius: '4px',
              },
            }}
          >
            <nav className={css.navigation}>
              <div>
                <NavLink className={css.nav_link} to="/dashboard/home">
                  <StyledLink to="/dashboard/home">
                    <BiSolidHome aria-label="Go to home tab" />
                  </StyledLink>
                  <StyledText to="/dashboard/home">
                    <span className={css.nav_text}>Home</span>
                  </StyledText>
                </NavLink>
              </div>
              <div>
                <NavLink className={css.nav_link} to="/dashboard/statistics">
                  <StyledLink to="/dashboard/statistics">
                    <BiStats aria-label="Go to statistics tab" />
                  </StyledLink>
                  <StyledText to="/dashboard/statistics">
                    <span className={css.nav_text}>Statistics</span>
                  </StyledText>
                </NavLink>
              </div>
            </nav>
          </IconContext.Provider>
        )}
      />
    </>
  );
};
export default Navigation;
