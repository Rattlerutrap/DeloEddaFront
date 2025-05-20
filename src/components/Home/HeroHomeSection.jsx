import React from 'react';
import '../../styles/components/Home/HeroHomeSection.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroHomeSection = () => {
  const { t } = useTranslation();
  return (
    <section className="heroHome">
      <div className="container">
        <div className="heroHome-content">
          <h1>{t('home.hero.h1')}</h1>
          <h2>{t('home.hero.h2')}</h2>
          <p>{t('home.hero.p')}</p>
          <Link to='/examples'>
            <button className="buttonExplore">{t('home.hero.button1')}</button>
          </Link>
          <Link to='/about'>
            <button className="buttonLearn">{t('home.hero.button2')}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeSection;