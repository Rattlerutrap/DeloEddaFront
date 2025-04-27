import React from 'react';
import '../../styles/components/DesignPortfolio/HeroPortfolioSection.css';
import portfolio1 from '../../images/portfolio1.png'
import portfolio2 from '../../images/portfolio2.png'
import { useTranslation } from 'react-i18next';

const HeroPortfolioSection = () => {
    const { t } = useTranslation();
    return (
        <section className="heroPortfolio">
            <div className='container'>
                <div className="buttons-container">
                    <button>{t('designportfolio.hero.button1')}</button>
                    <button>{t('designportfolio.hero.button2')}</button>
                </div>
                <div className="heroPortfolio-content">
                    <img src={portfolio1} alt="portfolio1" />
                    <img src={portfolio2} alt="portfolio2" />
                </div>
            </div>
        </section>
    );
};

export default HeroPortfolioSection;