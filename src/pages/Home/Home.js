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
import Image from '~/components/Image';
import Period from '~/pages/Home/Period';
import { CircularProgress, CircularProgressItem } from '~/pages/Home/CircularProgress';
import PortfolioItem from '~/pages/Home/PortfolioItem';
import AwardItem from '~/pages/Home/AwardItem';
import Status from '~/pages/Home/Status';

const cx = classNames.bind(styles);

const Home = () => {
    const [dataExperience, setDataExperience] = useState([]);
    const [dataEducation, setDataEducation] = useState([]);
    const [dataSkills, setDataSkills] = useState([]);
    const [status, setStatus] = useState([]);
    useEffect(() => {
        const dataDonaldVN = {
            experience: [
                {
                    title: 'Tutors',
                    time: 'May 2022 - August 2022',
                    job: 'Tutors at British International College BTEC FPT',
                    description:
                        'Support teachers to manage students, answer academic and professional problems of the subject.',
                    details: [
                        'Students are very enthusiastic, diligent in studying, always acquiring new knowledge.',
                        "The environment in The United Kingdom's is vibrant, positive and always fun to learn.",
                        'I also learned how to communicate more effectively, get used to many new relationships.',
                    ],
                },
            ],
            education: [
                {
                    title: 'High School',
                    time: 'September 2017 - August 2020',
                    job: 'student at Nguyen Binh Khiem High School',
                    description: 'This is wonderful memory that I never forgot',
                    details: [
                        'Students are very enthusiastic, diligent in studying, always acquiring new knowledge.',
                        "The environment in The United Kingdom's is vibrant, positive and always fun to learn.",
                        'I also learned how to communicate more effectively, get used to many new relationships.',
                    ],
                },
            ],
            skills: [
                {
                    title: 'HTML',
                    value: 90,
                },

                {
                    title: 'CSS',
                    value: 90,
                },
                {
                    title: 'Javascript',
                    value: 90,
                },
                {
                    title: 'Reactjs',
                    value: 90,
                },
                {
                    title: 'Database',
                    value: 90,
                },
                {
                    title: 'NodeJS',
                    value: 90,
                },
                {
                    title: 'English',
                    value: 90,
                },
                {
                    title: 'Photoshop',
                    value: 90,
                },
            ],
            status: [
                {
                    icon: <BusinessCenterOutlined />,
                    value: 10,
                    title: 'Projects done',
                },
                {
                    icon: <AccessAlarmsOutlined />,
                    value: 1013,
                    title: 'Hours of work',
                },
                {
                    icon: <EmojiEventsOutlined />,
                    value: 3,
                    title: 'Awards Won',
                },
                {
                    icon: <SentimentVerySatisfiedOutlined />,
                    value: 30,
                    title: 'Happy Clients',
                },
            ],
        };
        setDataExperience(dataDonaldVN.experience);
        setDataEducation(dataDonaldVN.education);
        setDataSkills(dataDonaldVN.skills);
        setStatus(dataDonaldVN.status);
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

                    <Image src={img.avt2} alt="Avatar" className={cx('infor')} />

                    {/* <h3 className={cx('name')}>Phan Lam Quoc Viet</h3> */}

                    {/* <PersonalInfor address="Da Nang city, Viet Nam" className={cx('item')} /> */}
                </div>
            </div>
            {/* PERSONAL SKILLS */}
            <div className={cx('container')}>
                <h4>Skills</h4>
                {/* <FontAwesomeIcon icon="fa-solid fa-briefcase" /> */}
                <h6>
                    One of the greatest strenghs about being a designer with an engineer background is that not only I
                    can handle the graphical aspects of a project
                </h6>
                <CircularProgress>
                    {dataSkills.map((data, index) => (
                        <CircularProgressItem key={index} data={data} />
                    ))}
                </CircularProgress>
            </div>
            {/* PERSONAL Status */}
            <Status data={status} />
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

                <Period data={dataExperience} />
            </div>
            {/* EDUCATION */}
            <div className={cx('container')}>
                <h4>Education</h4>
                <h6>
                    I have been good at math and science since my childhood, studying and obtaining a Master’s Degree in
                    Electrical Engineering.
                </h6>
                <Period data={dataEducation} />
            </div>
            {/* AWARDS */}

            <ul className={cx('awards')}>
                <AwardItem src={img.btec14} alt="" title="title" time="dd/mm/yyyy" />
            </ul>
            {/* REVIEW */}
            <div className={cx('container')}>
                <h4>REVIEW</h4>
                <h6>
                    One of the greatest strenghs about being a designer with an engineer background is that not only I
                    can handle the graphical aspects of a project
                </h6>
                <div className={cx('skills')}></div>
            </div>
        </div>
    );
};

export default Home;
