import React from 'react';
import '../styles/components/Header.css';
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <img src={logo} alt="DELO EDDA" width={70} height={70} />
        </h1>
        <nav className="nav">
          
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              {t('header.navlink1')}
            </NavLink>
            <NavLink
              to="/examples"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {t('header.navlink2')}
            </NavLink>
            <NavLink
              to="/design-portfolio"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {t('header.navlink3')}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {t('header.navlink4')}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {t('header.navlink5')}
            </NavLink>
          </div>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;