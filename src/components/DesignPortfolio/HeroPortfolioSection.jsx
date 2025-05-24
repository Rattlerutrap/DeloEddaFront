import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/DesignPortfolio/HeroPortfolioSection.css';
import portfolio1 from '../../images/portfolio1.jpg'
import portfolio2 from '../../images/portfolio2.jpg'
import { useTranslation } from 'react-i18next';

const HeroPortfolioSection = () => {
    const { t } = useTranslation();
    return (
        <section className="heroPortfolio">
            <div className='container'>
                <div className="buttons-container">
                    <Link to='/examples'>
                        <button>{t('designportfolio.hero.button1')}</button>
                    </Link>
                    {/* <button>{t('designportfolio.hero.button2')}</button> */}
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