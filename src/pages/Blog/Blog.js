// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Blog.module.scss';
import videos from '~/assets/video';
import BlogList from '~/pages/Blog/BlogList';
import Pagination from '~/components/Pagination';
import MoreBlogs from '~/pages/Blog/MoreBlogs';

const cx = classNames.bind(styles);
const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(5);

    // Get current blogs
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    useEffect(() => {
        const dataBlogs = [
            {
                id: 1,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 2,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 3,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 4,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 5,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 6,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 7,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 8,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 9,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 10,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                id: 11,
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: videos.video,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
        ];

        // fetch('http://js-blog-api.herokuapp/api/blogs?_limit=10&_page=1')

        setBlogs(dataBlogs);
    }, []);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log('Blog: ', paginate);
    return (
        <div className={cx('wapper')}>
            <h4>FILTER</h4>

            <BlogList dataBlogs={currentBlogs} />

            <Pagination
                blogsPerPage={blogsPerPage}
                totalBlogs={blogs.length}
                paginate={paginate}
                currentPage={currentPage}
            />

            <MoreBlogs moreBlogs={blogs} indexOfLastBlog={indexOfLastBlog} indexOfFirstBlog={indexOfFirstBlog} />
        </div>
    );
};

Blog.propTypes = {};
export default Blog;
