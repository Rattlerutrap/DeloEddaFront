import React from 'react';
import '../../styles/components/Home/HeroHomeSection.css';
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
          <button className="buttonExplore">{t('home.hero.button1')}</button>
          <button className="buttonLearn">{t('home.hero.button2')}</button>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeSection;