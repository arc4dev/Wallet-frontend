import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BiStats, BiSolidHome } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import Media from 'react-media';
import styled from 'styled-components';

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
                <StyledLink to="/dashboard/home">
                  <BiSolidHome />
                </StyledLink>
              </div>
              <div className={css.nav_link}>
                <StyledLink to="/dashboard/statistics">
                  <BiStats />
                </StyledLink>
              </div>
              <StyledLink to="/dashboard/currency">
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
              <div>
                <NavLink className={css.nav_link} to="/dashboard/home">
                  <BiSolidHome />
                  <span className={css.nav_text}>Home</span>
                </NavLink>
              </div>
              <div>
                <NavLink className={css.nav_link} to="/dashboard/statistics">
                  <BiStats />
                  <span className={css.nav_text}>Statistics</span>
                </NavLink>
              </div>
            </nav>
          </IconContext.Provider>
        )}
      />
    </div>
  );
};
export default Navigation;
