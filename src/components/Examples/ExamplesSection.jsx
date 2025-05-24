import React from 'react';
import '../../styles/components/Examples/ExamplesSection.css';
import { Link } from 'react-router-dom';
import example1 from '../../images/good4.jpg'
import example2 from '../../images/good3.jpg'
import example3 from '../../images/good2.jpg'
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
                            <Link to='/examples/productdetailpage/4'>
                                <img src={example1} alt="Большое изображение" />
                            </Link>
                        </div>
                        <div className="description">
                            <h4>{t('products.product4.title')}</h4>
                            <p>{t('examples.examples.p1')}</p>
                            <p className='price'>{t('products.product4.price')}</p>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="small-image-item">
                            <div className="small-image">
                                <Link to='/examples/productdetailpage/3'>
                                    <img src={example2} alt="Маленькое изображение 1" />
                                </Link>
                            </div>
                            <div className="description">
                                <h4>{t('products.product3.title')}</h4>
                                <p>{t('examples.examples.p2')}</p>
                                <p className='price'>{t('products.product3.price')}</p>
                            </div>
                        </div>

                        <div className="small-image-item">
                            <div className="small-image">
                                <Link to='/examples/productdetailpage/2'>
                                    <img src={example3} alt="Маленькое изображение 2" />
                                </Link>
                            </div>
                            <div className="description">
                                <h4>{t('products.product2.title')}</h4>
                                <p>{t('examples.examples.p3')}</p>
                                <p className='price'>{t('products.product2.price')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamplesSection;