import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './BlogItem.module.scss';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

BlogImages.propTypes = {
    className: PropTypes.string,
};

function BlogImages(mediaUrl, title, className) {
    const cx = classNames.bind(styles);

    const [slideIndex, setSlideIndex] = useState(1);

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
            {mediaUrl.mediaUrl.map((data, index) => {
                return (
                    <div key={index} className={cx('slide', slideIndex === index + 1 ? 'active-anim' : '')}>
                        <img src={data} alt={mediaUrl.title} />
                    </div>
                );
            })}

            <button onClick={nextSlide} className={cx('btn-slide', 'next' ? 'next' : 'prev')}>
                <img src={'next' ? <ArrowRight /> : <ArrowLeft />} alt="" />
            </button>

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

export default BlogImages;
