import classNames from 'classnames/bind';
import React from 'react';

import styles from './Home.module.scss';
import img from '~/assets/img';
import PersonalInfor from '~/components/PersonalInfor';

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

const Home = () => {
    return (
        <div className={cx('home')}>
            <div className={cx('container')}>
                <h1>Hi! My name is Quoc Viet, I'm a Creative Designer and Front-end Developer.</h1>

                <div className={cx('intro')}>
                    <div className={cx('about')}>
                        <p>
                            Hi! My name is Quoc Viet, I'm a creative designer and developer. I enjoy creating eye candy
                            solutions for web and mobile applications. I'd love to work on yours, too!
                        </p>
                        <p>
                            I traveled a very atypical path, both personally and professionally. I was born in Cameroon
                            and raised in 6 different countries and 3 continents. I speak English, French and Spanish
                            fluently. I have been good at math and science since my childhood, studying and obtaining a
                            Master’s Degree in Electrical Engineering. After working in that field for a couple of
                            years, I decided to learn design on my own and have been working as a product designer and
                            front end developer since July, 2007.
                        </p>
                        <p>
                            One of the greatest strenghs about being a designer with an engineer background is that not
                            only I can handle the graphical aspects of a project, but I can also fully understand,
                            participate and even lead the technical aspects of those same projects.
                        </p>
                    </div>

                    <div className={cx('infor')}>
                        <div className={cx('avt')}>
                            <img src={img.avt1} alt="AVT" />
                        </div>

                        <h3 className={cx('name')}>Phan Lam Quoc Viet</h3>

                        <PersonalInfor className={cx('item')} />
                    </div>
                </div>
            </div>

            <div className={cx('container')}>
                <h2>Relevant Experience</h2>
                <h6>
                    After working in that field for a couple of years, I decided to learn design on my own and have been
                    working as a product designer and front end developer since July, 2007.
                </h6>
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
            </div>
            {/* SKILLS */}
            <div className={cx('container')}>
                <h2>Skills</h2>
                <h6>
                    One of the greatest strenghs about being a designer with an engineer background is that not only I
                    can handle the graphical aspects of a project
                </h6>
                <div className={cx('skills')}>
                    <ul>
                        <li>Graphic Design</li>
                        <li>Interaction Design</li>
                        <li>App UI</li>
                        <li>Mobile Design</li>
                        <li>Web Design</li>
                    </ul>
                    <ul>
                        <li>PHP Developer</li>
                        <li>MySQL Database</li>
                        <li>Big Data</li>
                        <li>HTML5 & CSS3</li>
                        <li>jQuery Javascript</li>
                    </ul>
                </div>
            </div>
            {/* EDUCATION */}
            <div className={cx('container')}>
                <h2>Education</h2>
                <h6>
                    I have been good at math and science since my childhood, studying and obtaining a Master’s Degree in
                    Electrical Engineering.
                </h6>
                <div className={cx('education')}>
                    <ul>
                        <li>
                            <h6>Master of Industrial Design from Harvard</h6>
                            <p>September 2015 - June 2018</p>
                        </li>
                        <li>
                            <h6>BA of Technology Science from Harvard</h6>
                            <p>August 2011 - June 2015</p>
                        </li>
                        <li>
                            <h6>Master of Industrial Design from Harvard</h6>
                            <p>September 2015 - June 2018</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
