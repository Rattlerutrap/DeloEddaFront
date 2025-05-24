import React from 'react';
import '../../styles/components/Examples/ExamplesSection.css';
import { Link } from 'react-router-dom';
import good1 from '../../images/good3.jpg'
import good2 from '../../images/good4.jpg'
import good3 from '../../images/good5.jpg'
import { useTranslation } from 'react-i18next';

const ExamplesSection = () => {
    const { t } = useTranslation();
    return (
        <div className="section">
            <div className="container">
                <h1>{t('examples.examples.h1')}</h1>
                <div className="grid-layout">
                    <div className="left-column">
                        <div className="large-image">
                            <Link to='/examples/productdetailpage/1'>
                                <img src={good1} alt="Большое изображение" />
                            </Link>
                        </div>
                        <div className="description">
                            <h4>{t('examples.examples.h41')}</h4>
                            <p>{t('examples.examples.p11')}</p>
                            <p className='price'>{t('examples.examples.p12')}</p>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="small-image-item">
                            <div className="small-image">
                                <Link to='/examples/productdetailpage/2'>
                                    <img src={good2} alt="Маленькое изображение 1" />
                                </Link>
                            </div>
                            <div className="description">
                                <h4>{t('examples.examples.h42')}</h4>
                                <p>{t('examples.examples.p21')}</p>
                                <p className='price'>{t('examples.examples.p22')}</p>
                            </div>
                        </div>

                        <div className="small-image-item">
                            <div className="small-image">
                                <Link to='/examples/productdetailpage/3'>
                                    <img src={good3} alt="Маленькое изображение 2" />
                                </Link>
                            </div>
                            <div className="description">
                                <h4>{t('examples.examples.h43')}</h4>
                                <p>{t('examples.examples.p31')}</p>
                                <p className='price'>{t('examples.examples.p32')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamplesSection;