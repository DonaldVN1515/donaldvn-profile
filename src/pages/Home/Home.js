import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import img from '~/assets/img';
import PersonalInfor from '~/components/PersonalInfor';
import AvtImg from '~/components/AvtImg';
import PeriodExperience from '~/components/PeriodExperience';
import SkillbarItem from '~/components/SkillbarItem/SkillbarItem';

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
                        <AvtImg src={img.avt2} alt="Avatar" />

                        <h3 className={cx('name')}>Phan Lam Quoc Viet</h3>

                        <PersonalInfor address="Da Nang city, Viet Nam" className={cx('item')} />
                    </div>
                </div>
            </div>
            {/* Experience */}
            <div className={cx('container')}>
                <h2 className={cx('title')}>Work Experiences</h2>
                <h6>
                    Being aware of the job specification and the skills required to become a Web developer, I always try
                    to improve my skills and qualifications as soon as possible.
                </h6>

                <PeriodExperience />
            </div>
            {/* PERSOONAL SKILLS */}
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
                <SkillbarItem />
            </div>
            {/* AWARDS */}
            <div className={cx('container')}>
                <h2>Awards</h2>
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
            {/* HOBBIES */}
            <div className={cx('container')}>
                <h2>Hobbies</h2>
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
