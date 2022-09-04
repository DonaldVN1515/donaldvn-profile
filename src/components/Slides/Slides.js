import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Slides.module.scss';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

Slides.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array.isRequired,
};

function Slides({ className, data }) {
    const cx = classNames.bind(styles);

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== data.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === data.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(data.length);
        }
    };

    const moveDot = (index) => {
        setSlideIndex(index);
    };
    const classes = cx('slides', {
        [className]: className,
    });

    return (
        <div className={classes}>
            {/* Slides */}
            {data.map((data, index) => {
                return (
                    <div key={index} className={cx('slide', className, slideIndex === index + 1 ? 'active-anim' : '')}>
                        <img src={data} alt={data.title} />
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
                {Array.from({ length: data.length }).map((item, index) => (
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

export default Slides;
