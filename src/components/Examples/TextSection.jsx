import React from 'react';
import '../../styles/components/Examples/TextSection.css';
import { useTranslation } from 'react-i18next';

const TextSection = () => {
    const { t } = useTranslation();
    return (
        <div className='textSection'>
            <div className='container'>
                <h1>{t('examples.text.h1')}</h1>
                <div className='examplesContainer'>
                    <div className='examplesText'>
                        <div className='textBlock'>
                            <h2>{t('examples.text.h21')}</h2>
                            <p>{t('examples.text.p1')}</p>
                        </div>
                        <div className='textBlock'>
                            <h2>{t('examples.text.h22')}</h2>
                            <p>{t('examples.text.p2')}</p>
                        </div>
                    </div>
                    <div className='examplesText'>
                        <div className='textBlock'>
                            <h2>{t('examples.text.h23')}</h2>
                            <p>{t('examples.text.p3')}</p>
                        </div>
                        <div className='textBlock'>
                            <h2>{t('examples.text.h24')}</h2>
                            <p>{t('examples.text.p4')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextSection;