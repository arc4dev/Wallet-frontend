import css from './Navigation.module.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BiStats, BiSolidHome } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import Media from 'react-media';
import styled from 'styled-components';
import HomeTab from 'components/HomeTab/HomeTab';
import DiagramTab from 'components/DiagramTab/DiagramTab';
import Currency from 'components/Currency/Currency';

const StyledLink = styled(NavLink)`
  &.active {
    box-shadow: 0px 3px 10px 2px #4a56e280;
    border-radius: 8px;
  }
`;

const Navigation = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          color: '#FFFFFF',
          size: '2.38em',
          style: {
            padding: '8px',
            background: '#4A56E2',
            display: 'flex',
            borderRadius: '8px',
          },
        }}
      >
        <Media
          query="(max-width: 767px)"
          render={() => (
            <nav className={css.navigation}>
              <div className={css.nav_link}>
                <StyledLink to="/">
                  <BiSolidHome />
                </StyledLink>
              </div>
              <div className={css.nav_link}>
                <StyledLink to="/diagram">
                  <BiStats />
                </StyledLink>
              </div>
              <StyledLink to="/currency">
                <FaDollarSign />
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
              color: '#FFFFFF',
              size: '1.13em',
              style: {
                padding: '3px',
                background: '#4A56E2',
                display: 'flex',
                borderRadius: '4px',
              },
            }}
          >
            <nav className={css.navigation}>
              <div className={css.nav_link}>
                <StyledLink to="/">
                  <BiSolidHome />
                </StyledLink>
                <span className={css.nav_text}>Home</span>
              </div>
              <div className={css.nav_link}>
                <StyledLink to="/diagram">
                  <BiStats />
                </StyledLink>
                <span className={css.nav_text}>Statistics</span>
              </div>
            </nav>
          </IconContext.Provider>
        )}
      />

      <Routes>
        <Route path="/" element={<HomeTab />} />
        <Route path="/diagram" element={<DiagramTab />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="*" element={<HomeTab />} />
      </Routes>
    </div>
  );
};
export default Navigation;
