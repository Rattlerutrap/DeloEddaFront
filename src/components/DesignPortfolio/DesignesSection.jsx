import React from 'react';
import '../../styles/components/DesignPortfolio/DesignSection.css';
import example from '../../images/rectangle.jpg'
import { useTranslation } from 'react-i18next';

const DesignSection = () => {
    const { t } = useTranslation();
    return (
        <section className="designSection">
            <div className='container'>
                <div class="content-block">
                    <div class="text-content">
                        <h1>{t('designportfolio.designes.h1')}</h1>
                        <h2>{t('designportfolio.designes.h2')}</h2>
                        <p>{t('designportfolio.designes.p')}</p>
                        <button className='ExploreDes'>{t('designportfolio.designes.button')}</button>
                    </div>
                    <div class="image-content">
                        <img src={example} alt="Example"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignSection;