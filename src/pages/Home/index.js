import classNames from 'classnames/bind';
import React from 'react';

import styles from './Home.module.scss';
import img from '~/assets/img';
import PersonalInfor from '~/components/PersonalInfor';

const cx = classNames.bind(styles);
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
                    <div className={cx('period')}>
                        <div className={cx('work')}>
                            <h3 className={cx('title')}>Online Prepaid Services</h3>
                            <h6 className={cx('time')}>September 2019 - present</h6>
                        </div>
                        <div className={cx('infor')}>
                            <h4 className={cx('job')}>Fulltime - Senior Web Developer at TemPlaza.com</h4>
                            <p className={cx('description')}>
                                Working as a Senior Devloper on a large european based webshop for digital games and
                                gifrcards. The application is Laravel based and as a team we are working in a fully
                                scrum way.
                            </p>
                            <ul className={cx('details')}>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>At vero eos et accusamus et iusto odio.</li>
                                <li>Excepteur sint occaecat cupidatat non proident.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('period')}>
                        <div className={cx('work')}>
                            <h3 className={cx('title')}>Chief Technology Officer</h3>
                            <h6 className={cx('time')}>June 2018 - August 2019</h6>
                        </div>
                        <div className={cx('infor')}>
                            <h4 className={cx('job')}>Senior Web Developer at Global Art ,.LTD</h4>
                            <p className={cx('description')}>
                                As a senior at The Secret Lab I work on projects like Kaartjes.nl, Clay.com and more.
                                Using frameworks and technologies such as Laravel, Wordpress, Drupal 8 and
                                ElasticSearch. I also introduced working with Git Flow and supporting my colleagues to
                                write nice readable and reusable code.
                            </p>
                            <ul className={cx('details')}>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>At vero eos et accusamus et iusto odio.</li>
                                <li>Excepteur sint occaecat cupidatat non proident.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('period')}>
                        <div className={cx('work')}>
                            <h3 className={cx('title')}>Online Prepaid Services</h3>
                            <h6 className={cx('time')}>September 2019 - present</h6>
                        </div>
                        <div className={cx('infor')}>
                            <h4 className={cx('job')}>Fulltime - Senior Web Developer at TemPlaza.com</h4>
                            <p className={cx('description')}>
                                Working as a Senior Devloper on a large european based webshop for digital games and
                                gifrcards. The application is Laravel based and as a team we are working in a fully
                                scrum way.
                            </p>
                            <ul className={cx('details')}>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>At vero eos et accusamus et iusto odio.</li>
                                <li>Excepteur sint occaecat cupidatat non proident.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
