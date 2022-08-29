// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Blog.module.scss';
import images from '~/assets/img';
import BlogList from '~/pages/Blog/BlogList';
import Pagination from '~/components/Pagination';
import MoreBlogs from '~/pages/Blog/MoreBlogs';
import Filter from '~/components/Filter';

const cx = classNames.bind(styles);
const Blog = () => {
    const [dataBlogs, setBlogs] = useState([]);
    const [dataFilter, setdataFilter] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(5);

    // Get current blogs
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = dataBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

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

    // FILTER
    const dataFilterCategory = [];

    dataBlogs.map((data) => {
        if (dataFilterCategory.includes(data.label)) return null;
        dataFilterCategory.push(data.label);
        return dataFilterCategory;
    });

    const handleFilter = (filterValueSelected) => {
        // // Filter by label
        if (filterValueSelected === 'Show All') {
            setdataFilter(dataBlogs);
            return;
        }
        const filteredData = dataBlogs.filter((data) => (data = filterValueSelected));

        setdataFilter(filteredData);
    };
    console.log(dataFilter);

    // SEARCH

    const dataFilterTitle = [];

    dataBlogs.map((data) => {
        if (dataFilterTitle.includes(data.title)) return null;
        dataFilterTitle.push(data.title);

        return dataFilterTitle;
    });
    return (
        <div className={cx('wapper')}>
            <Filter
                dataFilterCategory={dataFilter}
                filterValueSelected={handleFilter}
                dataFilterTitle={dataFilterTitle}
            />

            <BlogList dataBlogs={currentBlogs} />

            <Pagination
                blogsPerPage={blogsPerPage}
                totalBlogs={dataFilter.length}
                paginate={paginate}
                currentPage={currentPage}
            />

            <MoreBlogs moreBlogs={dataBlogs} indexOfLastBlog={indexOfLastBlog} indexOfFirstBlog={indexOfFirstBlog} />
        </div>
    );
};

Blog.propTypes = {};
export default Blog;
