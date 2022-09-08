import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Reviews.module.scss';
import Image from '~/components/Image';

Reviews.propTypes = {
    data: PropTypes.array.isRequired,
};
const cx = classNames.bind(styles);

function Reviews({ data }) {
    // console.log(handleSlidesPerView());
    return (
        <div className={cx('wrapper')}>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                    2560: {
                        slidesPerView: 5,
                    },
                }}
                effect={'coverflow'}
                grabCursor
                centeredSlides
                // slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className={cx('slides')}
            >
                {data.map((review, index) => (
                    <SwiperSlide key={index} className={cx('slide')}>
                        <Image src={review.imageUrl} alt={review.name} className={cx('image')} />

                        <div className={cx('content')}>
                            <p>Reivew: {review.review}</p>
                            <h6>{review.name}</h6>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Reviews;
