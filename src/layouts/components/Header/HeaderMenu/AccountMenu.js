import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper } from '~/components/Wrapper';
import styles from './AccountMenu.module.scss';
import Button from '~/components/Buttton';

const cx = classNames.bind(styles);
const AccountMenu = ({ dataAccount = [], children }) => {
    const [visible, setVisible] = useState(false);

    const renderMenu = (attrs) => {
        return (
            <div className={cx('menu')} tabIndex="-1" {...attrs}>
                <Wrapper className={cx('wrapper')}>
                    {dataAccount.map((menuItem, index) => {
                        const classes = cx('item', {
                            separate: menuItem.separate,
                        });
                        return (
                            <Button className={classes} key={index} leftIcon={menuItem.icon} to={menuItem.to}>
                                {menuItem.title}
                            </Button>
                        );
                    })}
                </Wrapper>
            </div>
        );
    };
    const handleHide = () => {
        setVisible(false);
    };
    const handleShow = () => {
        setVisible(true);
    };
    return (
        <>
            <Tippy
                onClickOutside={handleHide}
                interactive
                visible={visible}
                offset={[0, 10]}
                placement="bottom-end"
                render={renderMenu}
            >
                <span onClick={visible ? handleHide : handleShow}>{children}</span>
            </Tippy>
        </>
    );
};
AccountMenu.propTypes = {
    children: PropTypes.node.isRequired,
    dataMenu: PropTypes.array,
};
export default AccountMenu;
