import React from 'react';
import '../../styles/components/DesignPortfolio/ProcessSection.css';
import { useTranslation } from 'react-i18next';

const ProcessSection = () => {
    const { t } = useTranslation();
    return (
        <section className="processSection">
            <div className='container'>
                <div className="content-section">
                    <h1>{t('designportfolio.process.h1')}</h1>
                    <p><span className="drop-cap">01.</span>{t('designportfolio.process.p1')}</p>
                    <p><span className="drop-cap">02.</span>{t('designportfolio.process.p2')}</p>
                    <p><span className="drop-cap">03.</span>{t('designportfolio.process.p3')}</p>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;