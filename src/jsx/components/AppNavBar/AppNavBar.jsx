import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AppNavBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

export const AppNavBar = () => {
  return (
    <nav className={css.navBar}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={buildLinkClass}>
        About
      </NavLink>
      <NavLink to="/products" className={buildLinkClass}>
        Products
      </NavLink>
    </nav>
  );
};
