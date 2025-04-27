import React from 'react';
import '../../styles/components/Home/ReviewsSection.css'
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar3.jpg'
import { useTranslation } from 'react-i18next';

const ReviewsSection = () => {
    const { t } = useTranslation();
    return (
        <section className='reviews'>
            <div className='container'>
                <h2 className='reviews-title'>{t('home.reviews.h2')}</h2>
                <div className='reviews-container'>
                    <div className='review'>
                        <p className='review-text'>{t('home.reviews.p1')}</p>
                        <div className='review-header'>
                            <img className='review-avatar' src={avatar1} alt="avatar1" />
                            <h3 className='author-name'>{t('home.reviews.h31')}</h3>
                        </div>
                    </div>
                    <div className='review'>
                        <p className='review-text'>{t('home.reviews.p2')}</p>
                        <div className='review-header'>
                            <img className='review-avatar' src={avatar2} alt="avatar2" />
                            <h3 className='author-name'>{t('home.reviews.h32')}</h3>
                        </div>
                    </div>
                    <div className='review'>
                        <p className='review-text'>{t('home.reviews.p3')}</p>
                        <div className='review-header'>
                            <img className='review-avatar' src={avatar3} alt="avatar3" />
                            <h3 className='author-name'>{t('home.reviews.h33')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection;