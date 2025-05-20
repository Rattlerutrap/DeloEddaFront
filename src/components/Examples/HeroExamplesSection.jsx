import React from 'react';
import '../../styles/components/Examples/HeroExamplesSection.css';
import { Link } from 'react-router-dom';
import shop1 from '../../images/shop1.png'
import shop2 from '../../images/shop2.png'
import { useTranslation } from 'react-i18next';

const HeroExamplesSection = () => {
    const { t } = useTranslation();
    return (
        <section className="HeroExamplesSection">
            <div className='container'>
                <div className="content-block">
                    <div className="text-content">
                        <h1>{t('examples.hero.h11')}</h1>
                        <p>{t('examples.hero.p1')}</p>
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
                        <Link to='/examples/productdetailpage/2'>
                            <img src={shop2} alt="Example" />
                        </Link>
                    </div>
                    <div className="text-content">
                        <h1>{t('examples.hero.h12')}</h1>
                        <p>{t('examples.hero.p2')}</p>
                        <div className='buttons'>
                            <Link to='/examples/productdetailpage/1'>
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