import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import TypeIt from 'typeit-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFaceLaughBeam } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

import { ThemeContext } from '~/components/ThemeContext';
import styles from './Home.module.scss';
import img from '~/assets/img';
// import PersonalInfor from '~/components/PersonalInfor';
import Image from '~/components/Image';
import { Period } from '~/pages/Home/Period';
import PortfolioItem from '~/pages/Home/PortfolioItem';
import Technologies from '~/pages/Home/Technologies';
import Status from '~/pages/Home/Status';
import Title from '~/pages/Home/Title';
import Reviews from '~/pages/Home/Reviews';
import { CircularProgress, CircularProgressItem } from '~/pages/Home/CircularProgress';

const cx = classNames.bind(styles);

const Home = () => {
    // THEME
    const context = useContext(ThemeContext);

    const [dataExperience, setDataExperience] = useState([]);
    const [dataEducation, setDataEducation] = useState([]);
    const [dataSkills, setDataSkills] = useState([]);
    const [dataStatus, setDataStatus] = useState([]);
    const [dataProfolio, seDataProfolio] = useState([]);
    const [dataTechnologies, setDataTechnologies] = useState([]);
    const [dataReviews, setDataReviews] = useState([]);
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
                    value: 70,
                },
                {
                    title: 'Database',
                    value: 60,
                },
                {
                    title: 'NodeJS',
                    value: 70,
                },
                {
                    title: 'English',
                    value: 80,
                },
                {
                    title: 'Photoshop',
                    value: 70,
                },
            ],
            status: [
                {
                    icon: <FontAwesomeIcon icon={faBriefcase} />,
                    value: 10,
                    title: 'Projects done',
                },
                {
                    icon: <FontAwesomeIcon icon={faClock} />,

                    value: 1013,
                    title: 'Hours of work',
                },
                {
                    icon: <FontAwesomeIcon icon={faTrophy} />,
                    value: 3,
                    title: 'Technologies Won',
                },
                {
                    icon: <FontAwesomeIcon icon={faFaceLaughBeam} />,
                    value: 30,
                    title: 'Happy Clients',
                },
            ],
            portfolio: [
                {
                    category: 'category',
                    title: 'title',
                    imageUrl: img.avt1,
                    href: '#',
                },
                {
                    category: 'category',
                    title: 'title',
                    imageUrl: img.btec14,
                    href: '#',
                },
                {
                    category: 'category',
                    title: 'title',
                    imageUrl: img.btec14,
                    href: '#',
                },
                {
                    category: 'category',
                    title: 'title',
                    imageUrl: img.btec14,
                    href: '#',
                },
                {
                    category: 'category',
                    title: 'title',
                    imageUrl: img.btec14,
                    href: '#',
                },
                {
                    category: 'category',
                    title: 'title',
                    imageUrl: img.btec14,
                    href: '#',
                },
            ],
            technologies: [
                {
                    title: 'title',
                    time: 'dd/mm/yyy',
                    imageUrl: img.axios,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',

                    imageUrl: img.babel,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',
                    imageUrl: img.css,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',

                    imageUrl: img.fontAwsome,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',
                    imageUrl: img.frammerMotion,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',

                    imageUrl: img.html,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',
                    imageUrl: img.axios,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',

                    imageUrl: img.babel,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',
                    imageUrl: img.css,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',

                    imageUrl: img.fontAwsome,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',
                    imageUrl: img.frammerMotion,
                },
                {
                    title: 'title',
                    time: 'dd/mm/yyy',

                    imageUrl: img.html,
                },
            ],
            dataReviews: [
                {
                    name: 'name',
                    linkFace: '#',
                    imageUrl: img.avt2,
                    createAt: 'dd/mm/yyy',
                    review: 'LoremMollit veniam est est excepteur ullamco laborum enim proident non deserunt id ut minim tempor.',
                },
                {
                    name: 'name',
                    linkFace: '#',
                    imageUrl: img.btec17,
                    createAt: 'dd/mm/yyy',
                    review: 'LoremMollit veniam est est excepteur ullamco laborum enim proident non deserunt id ut minim tempor.',
                },
                {
                    name: 'name',
                    linkFace: '#',
                    imageUrl: img.btec19,
                    createAt: 'dd/mm/yyy',
                    review: 'LoremMollit veniam est est excepteur ullamco laborum enim proident non deserunt id ut minim tempor.',
                },
                {
                    name: 'name',
                    linkFace: '#',
                    imageUrl: img.btec14,
                    createAt: 'dd/mm/yyy',
                    review: 'LoremMollit veniam est est excepteur ullamco laborum enim proident non deserunt id ut minim tempor.',
                },
                {
                    name: 'name',
                    linkFace: '#',
                    imageUrl: img.avt2,
                    createAt: 'dd/mm/yyy',
                    review: 'LoremMollit veniam est est excepteur ullamco laborum enim proident non deserunt id ut minim tempor.',
                },
                {
                    name: 'name',
                    linkFace: '#',
                    imageUrl: img.btec17,
                    createAt: 'dd/mm/yyy',
                    review: 'LoremMollit veniam est est excepteur ullamco laborum enim proident non deserunt id ut minim tempor.',
                },
                {
                    name: 'name',
                    linkFace: '#',
                    imageUrl: img.btec19,
                    createAt: 'dd/mm/yyy',
                    review: 'LoremMollit veniam est est excepteur ullamco laborum enim proident non deserunt id ut minim tempor.',
                },
                {
                    name: 'name',
                    linkFace: '#',
                    imageUrl: img.btec14,
                    createAt: 'dd/mm/yyy',
                    review: 'LoremMollit veniam est est excepteur ullamco laborum enim proident non deserunt id ut minim tempor.',
                },
            ],
        };
        setDataExperience(dataDonaldVN.experience);
        setDataEducation(dataDonaldVN.education);
        setDataSkills(dataDonaldVN.skills);
        setDataStatus(dataDonaldVN.status);
        seDataProfolio(dataDonaldVN.portfolio);
        setDataTechnologies(dataDonaldVN.technologies);
        setDataReviews(dataDonaldVN.dataReviews);
    }, []);

    return (
        <div className={cx('home', context.theme)}>
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
                </div>
            </div>
            {/* PERSONAL SKILLS */}
            <div className={cx('container')}>
                <Title
                    title="Skills"
                    sub="One of the greatest strenghs about being a designer with an engineer background is that not only I can
                handle the graphical aspects of a project"
                />
                <CircularProgress>
                    {dataSkills.map((data, index) => (
                        <CircularProgressItem key={index} data={data} />
                    ))}
                </CircularProgress>
            </div>

            {/* PORTFOLIO */}
            <div className={cx('container')}>
                <Title
                    title="Portfolio"
                    sub="I have been good at math and science since my childhood, studying and obtaining a Master’s Degree in
                    Electrical Engineering."
                />

                <PortfolioItem data={dataProfolio} />
            </div>
            {/* PERSONAL Status */}
            <Status data={dataStatus} />
            {/* Experience */}
            <div className={cx('container')}>
                <Title
                    title="Work Experiences"
                    sub="Being aware of the job specification and the skills required to become a Web developer, I always try
                    to improve my skills and qualifications as soon as possible."
                />

                <Period data={dataExperience} />
            </div>
            {/* EDUCATION */}
            <div className={cx('container')}>
                <Title
                    title="Education"
                    sub="I have been good at math and science since my childhood, studying and obtaining a Master’s Degree in
                    Electrical Engineering."
                />
                <Period data={dataEducation} />
            </div>

            {/* REVIEW */}
            <div className={cx('container')}>
                <Title
                    title="REVIEW"
                    sub="One of the greatest strenghs about being a designer with an engineer background is that not only I
                    can handle the graphical aspects of a project"
                />

                <Reviews data={dataReviews} />
            </div>

            {/* Technologies */}

            <Technologies data={dataTechnologies} />
        </div>
    );
};

export default Home;
