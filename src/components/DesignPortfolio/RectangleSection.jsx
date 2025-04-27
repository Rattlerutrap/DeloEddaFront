import React from 'react';
import '../../styles/components/DesignPortfolio/RectangleSection.css';
import example from '../../images/rectangle.jpg'
import { useTranslation } from 'react-i18next';

const RectangleSection = () => {
    const { t } = useTranslation();
    return (
        <section className="rectangleSection">
            <div className='container'>
                <img src={example} alt="rectangle" />
            </div>
        </section>
    );
};

export default RectangleSection;