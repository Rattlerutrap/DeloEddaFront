import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/DesignPortfolio/DesignSection.css';
import example from '../../images/exampledesign.jpg'
import { useTranslation } from 'react-i18next';

const DesignSection = () => {
    const { t } = useTranslation();
    return (
        <section className="designSection">
            <div className='container'>
                <div className="content-block">
                    <div className="text-content">
                        <h1>{t('designportfolio.designes.h1')}</h1>
                        <h2>{t('designportfolio.designes.h2')}</h2>
                        <p>{t('designportfolio.designes.p')}</p>
                        <Link to='/examples'>
                            <button className='ExploreDes'>{t('designportfolio.designes.button')}</button>
                        </Link>
                    </div>
                    <div className="image-content">
                        <img src={example} alt="Example"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignSection;