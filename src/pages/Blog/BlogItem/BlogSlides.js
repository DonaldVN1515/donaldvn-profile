import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './BlogItem.module.scss';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

BlogSlides.propTypes = {
    className: PropTypes.string,
};

function BlogSlides(mediaUrl, title, className) {
    const cx = classNames.bind(styles);

    const [slideIndex, setSlideIndex] = useState(1);

    // autoPlaySlide
    // useEffect(() => {
    //     const autoPlaySlide = setInterval(() => {
    //         nextSlide();
    //     }, 3000);
    //     return () => {
    //         clearInterval(autoPlaySlide);
    //     };
    // }, [slideIndex]);


    const nextSlide = () => {
        if (slideIndex !== mediaUrl.mediaUrl.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === mediaUrl.mediaUrl.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(mediaUrl.mediaUrl.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };

    return (
        <div className={cx('slides', className)}>
            {/* Slides */}
            {mediaUrl.mediaUrl.map((data, index) => {
                return (
                    <div key={index} className={cx('slide', slideIndex === index + 1 ? 'active-anim' : '')}>
                        <img src={data} alt={mediaUrl.title} />
                    </div>
                );
            })}

            {/* Button */}
            <button onClick={prevSlide} className={cx('btn-slide', 'prev')}>
                <ChevronLeft className={cx('icon')} />
            </button>
            <button onClick={nextSlide} className={cx('btn-slide', 'next')}>
                <ChevronRight className={cx('icon')} />
            </button>
            {/* Dots */}
            <div className={cx('dots')}>
                {Array.from({ length: mediaUrl.mediaUrl.length }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={cx('dot', slideIndex === index + 1 ? 'active' : '')}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default BlogSlides;
