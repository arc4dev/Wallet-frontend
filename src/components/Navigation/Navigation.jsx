import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BiStats, BiSolidHome } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import Media from 'react-media';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    box-shadow: 0px 3px 10px 0px #4A56E280;
    border-radius: 8px;
    filter: contrast(112%);
`;

const StyledText = styled(NavLink)`
  &.active {
    font-weight: 700;
  }
`;

const Navigation = () => {
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
                    <BiSolidHome />
                  </StyledLink>
                  <StyledText to="/dashboard/home">
                    <span className={css.nav_text}>Home</span>
                  </StyledText>
                </NavLink>
              </div>
              <div>
                <NavLink className={css.nav_link} to="/dashboard/statistics">
                  <StyledLink to="/dashboard/statistics">
                    <BiStats />
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
