// import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';
import img from '~/assets/img';

const cx = classNames.bind(styles);
const Image = ({ fallBack: customFallBack = img.noImage, src, alt, className, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };
    return (
        <div ref={ref} className={cx('wrapper', className)}>
            <img className={cx('image')} src={fallBack || src} {...props} alt={alt} onError={handleError} />
        </div>
    );
};

// Image.propTypes = {
//     fallBack: PropTypes.string,
//     className: PropTypes.string,
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
// };
export default forwardRef(Image);
