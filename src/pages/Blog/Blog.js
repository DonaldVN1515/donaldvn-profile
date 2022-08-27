// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Blog.module.scss';
import images from '~/assets/img';
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
        // isRequired: Label, title, url, published, author, category, viewers, readTime
        const dataBlogs = [
            {
                label: 'music',
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: 'https://soundcloud.com/longdley1/vstra-phong-ft-tgsn-tyronee?si=b4751788915346c7847719ffcb19565e',
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                label: 'images',
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: [images.btec14, images.btec17, images.btec19],
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                label: 'quote',
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: 'Ông cha ta có câu: Ở đời này, có nàm thì mới có lăn, không nàm mà đòi lăn thì chỉ có cạp đất mà lăn.',
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                label: 'image',
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: images.btec19,
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                label: 'video',
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: 'https://www.youtube.com/watch?v=czb2PASrzTA',
                published: 'dd/mm/yyy',
                author: 'DonaldVN',
                category: 'Blog',
                viewers: 1,
                readTime: '00:00',
            },
            {
                label: 'video',
                title: 'Video đầu tiên của Team Nhà Nghèo Đi Phượt',
                subtitle:
                    'Kênh #NNDP Nhà Nghèo Đi Phượt là kênh đem các bạn những video về những địa điểm hoang sơ, ít người, tránh xa khỏi ồn ào thành thị. Theo cách của #NNDP Nhà Nghèo Đi Phượt nhằm mang lại những món ăn tinh thần sau những ngày làm việc và học tập mệt mỏi.',
                url: 'https://www.youtube.com/watch?v=czb2PASrzTA',
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
