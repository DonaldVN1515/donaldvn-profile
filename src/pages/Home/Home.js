import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import TypeIt from 'typeit-react';
import {
    SentimentVerySatisfiedOutlined,
    BusinessCenterOutlined,
    AccessAlarmsOutlined,
    EmojiEventsOutlined,
} from '@mui/icons-material';

import styles from './Home.module.scss';
import img from '~/assets/img';
// import PersonalInfor from '~/components/PersonalInfor';
import AvtImg from '~/components/AvtImg';
import PeriodExperience from '~/pages/Home/PeriodExperience';
import { CircularProgress, CircularProgressItem } from '~/pages/Home/CircularProgress';
import Overlay from '~/components/Overlay';
import PortfolioItem from '~/pages/Home/PortfolioItem';

const cx = classNames.bind(styles);

const Home = () => {
    const [dataExperience, setDataExperience] = useState([]);
    useEffect(() => {
        const userExperience = [
            {
                title: 'Tutors',
                time: 'May 2022 - August 2022',
                job: 'Tutors at British International College BTEC FPT',
                description:
                    'Support teachers to manage students, answer academic and professional problems of the subject.',
                details: {
                    line1: 'Students are very enthusiastic, diligent in studying, always acquiring new knowledge.',
                    line2: "The environment in The United Kingdom's is vibrant, positive and always fun to learn.",
                    line3: 'I also learned how to communicate more effectively, get used to many new relationships.',
                },
            },
        ];

        setDataExperience(userExperience);
    }, []);

    return (
        <div className={cx('home')}>
            <div className={cx('container')}>
                <h1>
                    <TypeIt options={{ speed: 60, waitUntilVisible: true, loopDelay: 5000 }}>
                        Hi! My name is Quoc Viet, I'm a Creative Designer and Front-end Developer.
                    </TypeIt>
                </h1>

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
                        <AvtImg cover src={img.avt2} alt="Avatar" />

                        {/* <h3 className={cx('name')}>Phan Lam Quoc Viet</h3> */}

                        {/* <PersonalInfor address="Da Nang city, Viet Nam" className={cx('item')} /> */}
                    </div>
                </div>
            </div>
            {/* PERSONAL SKILLS */}
            <div className={cx('container')}>
                <h4>Skills</h4>
                <h6>
                    One of the greatest strenghs about being a designer with an engineer background is that not only I
                    can handle the graphical aspects of a project
                </h6>
                <CircularProgress>
                    <CircularProgressItem label="HTML" value={90} />
                    <CircularProgressItem label="CSS" value={90} />
                    <CircularProgressItem label="Javascript" value={80} />
                    <CircularProgressItem label="Reactjs" value={70} />
                    <CircularProgressItem label="Database" value={60} />
                    <CircularProgressItem label="NodeJS" value={50} />
                    <CircularProgressItem label="English" value={70} />
                    <CircularProgressItem label="Photoshop" value={60} />
                </CircularProgress>
            </div>
            {/* PERSONAL Status */}
            <div className={cx('status')}>
                <Overlay className={cx('overlay')} />

                <div className={cx('status-content')}>
                    <div className={cx('status-item')}>
                        <BusinessCenterOutlined className={cx('status-icon')} />
                        <span>10</span>
                        <h6>Projects done</h6>
                    </div>
                    <div className={cx('status-item')}>
                        <AccessAlarmsOutlined className={cx('status-icon')} />
                        <span>1,013</span>
                        <h6>Hous of work</h6>
                    </div>

                    <div className={cx('status-item')}>
                        <EmojiEventsOutlined className={cx('status-icon')} />
                        <span>3</span>
                        <h6>Awards Won</h6>
                    </div>

                    <div className={cx('status-item')}>
                        <SentimentVerySatisfiedOutlined className={cx('status-icon')} />
                        <span>30</span>
                        <h6>Happy Clients</h6>
                    </div>
                </div>
            </div>
            {/* PORTFOLIO */}
            <div className={cx('container')}>
                <h4>Portfolio</h4>
                <h6>
                    I have been good at math and science since my childhood, studying and obtaining a Master’s Degree in
                    Electrical Engineering.
                </h6>
                <div className={cx('portfolio')}>
                    <PortfolioItem src={img.btec14} alt="" category="category" title="title" href="#" />
                    <PortfolioItem src={img.avt} alt="" category="category" title="title" href="#" />
                    <PortfolioItem src={img.avt2} alt="" category="category" title="title" href="#" />
                    <PortfolioItem src={img.noImage} alt="" category="category" title="title" href="#" />
                    <PortfolioItem src={img.btec19} alt="" category="category" title="title" href="#" />
                    <PortfolioItem src={img.btec17} alt="" category="category" title="title" href="#" />
                </div>
            </div>
            {/* Experience */}
            <div className={cx('container')}>
                <h4 className={cx('title')}>Work Experiences</h4>
                <h6>
                    Being aware of the job specification and the skills required to become a Web developer, I always try
                    to improve my skills and qualifications as soon as possible.
                </h6>

                <PeriodExperience dataExperience={dataExperience} />
            </div>
            {/* EDUCATION */}
            <div className={cx('container')}>
                <h4>Education</h4>
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
            {/* AWARDS */}
            <div className={cx('container')}>
                <h4>Awards</h4>
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
            {/* REVIEW */}
            <div className={cx('container')}>
                <h4>REVIEW</h4>
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
        </div>
    );
};

export default Home;
