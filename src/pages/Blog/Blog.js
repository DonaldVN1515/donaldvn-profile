import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Blog.module.scss';
import BlogItem from '~/pages/Blog/BlogItem';

const cx = classNames.bind(styles);
const Blog = () => {
    return (
        <div className={cx('wapper')}>
            <h2>BLOG PAGE</h2>

            <div className={cx('content')}>
                <BlogItem
                    large
                    to=""
                    className={cx('item', 'large')}
                    title="#1 #ĐiPhượt #ĐàNẵng #NNDP | Video đầu tiên của Team Nhà Nghèo Đi Phượt"
                    subtitle="Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngyaf làm việc và học tập mệt mỏi."
                />
                <BlogItem
                    to=""
                    className={cx('item')}
                    title="#1 #ĐiPhượt #ĐàNẵng #NNDP | Video đầu tiên của Team Nhà Nghèo Đi Phượt"
                    subtitle="Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngyaf làm việc và học tập mệt mỏi."
                />
                <BlogItem
                    to=""
                    className={cx('item')}
                    title="#1 #ĐiPhượt #ĐàNẵng #NNDP | Video đầu tiên của Team Nhà Nghèo Đi Phượt"
                    subtitle="Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngyaf làm việc và học tập mệt mỏi."
                />
                <BlogItem
                    to=""
                    className={cx('item')}
                    title="#1 #ĐiPhượt #ĐàNẵng #NNDP | Video đầu tiên của Team Nhà Nghèo Đi Phượt"
                    subtitle="Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngyaf làm việc và học tập mệt mỏi."
                />
                <BlogItem
                    to=""
                    className={cx('item')}
                    title="#1 #ĐiPhượt #ĐàNẵng #NNDP | Video đầu tiên của Team Nhà Nghèo Đi Phượt"
                    subtitle="Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngyaf làm việc và học tập mệt mỏi."
                />
            </div>
        </div>
    );
};

Blog.propTypes = {};
export default Blog;
