import React from 'react';
import '../../styles/components/Examples/HeroExamplesSection.css';
import { Link } from 'react-router-dom';
import shop1 from '../../images/good1.jpg'
import shop2 from '../../images/good5.jpg'
import { useTranslation } from 'react-i18next';

const HeroExamplesSection = () => {
    const { t } = useTranslation();
    return (
        <section className="HeroExamplesSection">
            <div className='container'>
                <div className="content-block">
                    <div className="text-content">
                        <h1>{t('examples.hero.h11')}</h1>
                        <p>{t('products.product1.title')}</p>
                        <div className='buttons'>
                            <Link to='/examples/productdetailpage/1'>
                                <button className='button1'>{t('examples.hero.button1')}</button>
                            </Link>
                            {/* <button className='button2'>{t('examples.hero.button2')}</button> */}
                        </div>
                    </div>
                    <div className="image-content">
                        <Link to='/examples/productdetailpage/1'>
                            <img src={shop1} alt="Example" />
                        </Link>
                    </div>
                </div>
                <div className="content-block">
                    <div className="image-content">
                        <Link to='/examples/productdetailpage/5'>
                            <img src={shop2} alt="Example" />
                        </Link>
                    </div>
                    <div className="text-content">
                        <h1>{t('examples.hero.h12')}</h1>
                        <p>{t('products.product5.title')}</p>
                        <div className='buttons'>
                            <Link to='/examples/productdetailpage/5'>
                                <button className='button1'>{t('examples.hero.button1')}</button>
                            </Link>
                            {/* <button className='button2'>{t('examples.hero.button2')}</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroExamplesSection;