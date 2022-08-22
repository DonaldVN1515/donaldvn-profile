import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './PeriodExperience.module.scss';

const cx = classNames.bind(styles);

const userExperience = [
    {
        title: 'Online Prepaid Services',
        time: 'September 2019 - present',
        job: 'Fulltime - Senior Web Developer at TemPlaza.com',
        description:
            'Working as a Senior Devloper on a large european based webshop for digital games and gifrcards. The application is Laravel based and as a team we are working in a fully scrum way.',
        details: {
            line1: 'Lorem ipsum dolor sit amet.',
            line2: 'At vero eos et accusamus et iusto odio.',
            line3: 'Excepteur sint occaecat cupidatat non proident.',
        },
    },
    {
        title: 'Chief Technology Officer',
        time: 'June 2018 - August 2019',
        job: 'Senior Web Developer at Global Art ,.LTD',
        description:
            'As a senior at The Secret Lab I work on projects like Kaartjes.nl, Clay.com and more. Using frameworks and technologies such as Laravel, Wordpress, Drupal 8 and ElasticSearch. I also introduced working with Git Flow and supporting my colleagues to write nice readable and reusable code.',
        details: {
            line1: 'Lorem ipsum dolor sit amet.',
            line2: 'At vero eos et accusamus et iusto odio.',
            line3: 'Excepteur sint occaecat cupidatat non proident.',
        },
    },
    {
        title: 'Chief Technology Officer',
        time: 'June 2018 - August 2019',
        job: 'Senior Web Developer at Global Art ,.LTD',
        description:
            'As a senior at The Secret Lab I work on projects like Kaartjes.nl, Clay.com and more. Using frameworks and technologies such as Laravel, Wordpress, Drupal 8 and ElasticSearch. I also introduced working with Git Flow and supporting my colleagues to write nice readable and reusable code.',
        details: {
            line1: 'Lorem ipsum dolor sit amet.',
            line2: 'At vero eos et accusamus et iusto odio.',
            line3: 'Excepteur sint occaecat cupidatat non proident.',
        },
    },
];
const PeriodExperience = () => {
    return (
        <div className={cx('experience')}>
            {userExperience.map((period, index) => (
                <div key={index} className={cx('period')}>
                    <div className={cx('work')}>
                        <h3 className={cx('title')}>{period.title}</h3>
                        <h6 className={cx('time')}>{period.time}</h6>
                    </div>
                    <div className={cx('infor')}>
                        <h4 className={cx('job')}>{period.job}</h4>
                        <p className={cx('description')}>{period.description}</p>
                        <ul className={cx('details')}>
                            <li>{period.details.line1}</li>
                            <li>{period.details.line2}</li>
                            <li>{period.details.line3}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};
PeriodExperience.propTypes = {};
export default PeriodExperience;
