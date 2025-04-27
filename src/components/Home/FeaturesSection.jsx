import React from 'react';
import example1 from '../../images/example1.jpg'
import example2 from '../../images/example2.jpg'
import example3 from '../../images/example3.jpg'
import '../../styles/components/Home/FeaturesSection.css';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="features" id="designs">
      <div className="container">
        <h3>{t('home.features.h3')}</h3>
        <h2>{t('home.features.h2')}</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <img src={example1} alt="example1" />
            <h3>{t('home.features.h31')}</h3>
            <p>{t('home.features.p1')}</p>
          </div>

          <div className="feature-card">
            <img src={example2} alt="example2" />
            <h3>{t('home.features.h32')}</h3>
            <p>{t('home.features.p2')}</p>
          </div>

          <div className="feature-card">
            <img src={example3} alt="example3" />
            <h3>{t('home.features.h33')}</h3>
            <p>{t('home.features.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;