import React from 'react';
import '../../styles/components/About/Story.css';
import Rectangle from '../../images/rectangle.jpg'
import { useTranslation } from 'react-i18next';

const Story = () => {
    const { t } = useTranslation();
    return (
        <section className="story">
            <div className="container">
                <div className="content-block">
                    <div>
                        <img src={Rectangle} alt="rect" />
                    </div>
                    <div>
                        <h3>{t('about.story.h3')}</h3>
                        <h2>{t('about.story.h2')}</h2>
                        <p>{t('about.story.p1')}</p>
                        <p>{t('about.story.p2')}</p>
                        <p>{t('about.story.p3')}</p>
                        <button>{t('about.story.button')} →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;