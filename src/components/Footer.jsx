import React from 'react';
import '../styles/components/Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{t('footer.h3')}</h3>
            <p>{t('footer.p1')}</p>
          </div>
          <div className="footer-contact">
            <h4>{t('footer.h4')}</h4>
            <p>info@deloedda.com</p>
            <p>+7 (111) 111 1111</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} {t('footer.p2')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;