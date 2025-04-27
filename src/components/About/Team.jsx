import React from 'react';
import '../../styles/components/About/Team.css';
import master from '../../images/rectangle.jpg'
import manager from '../../images/rectangle.jpg'
import { useTranslation } from 'react-i18next';

const Team = () => {
    const { t } = useTranslation();
    return (
        <section className="team">
            <div className="container">
            <h1>{t('about.team.h1')}</h1>
                <div className="content-block">
                    <div className="person">
                        <div>
                            <img src={master} alt="master" />
                        </div>
                        <div>
                            <h2>{t('about.team.h21')}</h2>
                            <p>{t('about.team.p1')}</p>
                        </div>
                    </div>
                    <div className="person">
                        <div>
                            <img src={manager} alt="manager" />
                        </div>
                        <div>
                            <h2>{t('about.team.h22')}</h2>
                            <p>{t('about.team.p2')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;