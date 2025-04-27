import React from 'react';
import '../../styles/components/Home/PhilosophySection.css';
import point1 from '../../images/point1.png'
import point2 from '../../images/point2.png'
import point3 from '../../images/point3.png'
import { useTranslation } from 'react-i18next';

const PhilosophySection = () => {
  const { t } = useTranslation();
  return (
    <section className="philosophy" id="philosophy">
      <div className="container">
        <h2>{t('home.phylosophy.h2')}</h2>
        <h3>{t('home.phylosophy.h3')}</h3>

        <div className="philosophy-content">
          <p>{t('home.phylosophy.p')}</p>

          <div className="philosophy-points">
            <div className="point">
              <img src={point1} alt="point1" />
              <div className='point-text'>
                <h4>{t('home.phylosophy.h41')}</h4>
                <p>{t('home.phylosophy.p1')}</p>
              </div>
            </div>

            <div className="point">
              <img src={point2} alt="point2" />
              <div className='point-text'>
                <h4>{t('home.phylosophy.h42')}</h4>
                <p>{t('home.phylosophy.p2')}</p>
              </div>
            </div>

            <div className="point">
              <img src={point3} alt="point3" />
              <div className='point-text'>
                <h4>{t('home.phylosophy.h43')}</h4>
                <p>{t('home.phylosophy.p3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;