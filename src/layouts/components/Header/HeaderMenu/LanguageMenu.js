import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState, Fragment } from 'react';
import Tippy from '@tippyjs/react/headless';

import styles from './LanguageMenu.module.scss';
import { Wrapper } from '~/components/Wrapper';
import Button from '~/components/Buttton';

const cx = classNames.bind(styles);

const defautFunction = () => {};
const LanguageMenu = ({ children, dataLanguage = [], onChange = defautFunction }) => {
    const [visible, setVisible] = useState(false);

    const renderMenu = (attrs) => {
        return (
            <div tabIndex="-1" {...attrs}>
                <Wrapper className={cx('wrapper')}>
                    {dataLanguage.map((LanguageItem, index) => (
                        <Button className={cx('item')} key={index}>
                            {LanguageItem.title}
                        </Button>
                    ))}
                </Wrapper>
            </div>
        );
    };
    const handleShow = () => {
        setVisible(true);
    };
    const handleHide = () => {
        setVisible(false);
    };
    return (
        <span className={cx('menu')} onClick={visible ? handleHide : handleShow}>
            <Tippy
                interactive
                placement="bottom"
                visible={visible}
                offset={[10, 10]}
                onClickOutside={handleHide}
                render={renderMenu}
            >
                <span>{children}</span>
            </Tippy>
        </span>
    );
};
LanguageMenu.propTypes = {
    children: PropTypes.node.isRequired,
    dataLanguage: PropTypes.array,
    onChange: PropTypes.func,
};
export default LanguageMenu;
