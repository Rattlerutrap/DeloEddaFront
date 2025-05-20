import React, { useState } from 'react';
import '../../styles/components/About/Story.css';
import Rectangle from '../../images/rectangle.jpg'
import { useTranslation } from 'react-i18next';

const Story = () => {
    const { t } = useTranslation();
    const [currentText, setCurrentText] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleButtonClick = () => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentText(currentText === 1 ? 2 : 1);
            setIsAnimating(false);
        }, 200);
    };
    return (
        <section className="story">
            <div className="container">
                <div className="content-block">
                    <div>
                        <img src={Rectangle} alt="rect" />
                    </div>
                    <div className="text-container">
                        <div className={`text-content-story ${currentText === 1 ? 'active' : ''} ${isAnimating ? 'exiting' : ''}`}>
                            <h3>{t('about.story.h3')}</h3>
                            <h2>{t('about.story.h2')}</h2>
                            <p>{t('about.story.p1')}</p>
                            <p>{t('about.story.p2')}</p>
                            <p>{t('about.story.p3')}</p>
                        </div>
                        
                        <div className={`text-content-story ${currentText === 2 ? 'active' : ''} ${isAnimating ? 'entering' : ''}`}>
                            <p>{t('about.story.p_alt')}</p>
                        </div>
                        <button onClick={handleButtonClick}>
                            {t(`about.story.button${currentText}`)}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;