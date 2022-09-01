import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Page404.module.scss';
import Overlay from '~/components/Overlay';
import Button from '~/components/Buttton';
import config from '~/config';
import { KeyboardArrowDown, Settings } from '@mui/icons-material';

Page404.propTypes = {};

function Page404() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <Overlay className={cx('overlay')} />
            <div className={cx('page404')}>
                <div className={cx('programming')}>
                    <div className={cx('code', 'code-html')}>
                        <header>
                            <Settings className={cx('icon')} />
                            <h1>HTML</h1>
                            <KeyboardArrowDown className={cx('icon')} />
                        </header>
                        <div className={cx('code-content')}>
                            <code>
                                <span className={cx('c-r')}>&lt;div</span> <span className={cx('c-y')}>class</span>
                                <span className={cx('c-w')}>=</span>
                                <span className={cx('c-g')}>"rect"</span>
                                <span className={cx('c-r')}>&gt;&lt;/div&gt;</span>
                            </code>
                        </div>
                    </div>
                    <div className={cx('code', 'code-css')}>
                        <header>
                            <Settings className={cx('icon')} />
                            <h1>CSS</h1>
                            <KeyboardArrowDown className={cx('icon')} />
                        </header>
                        <div className={cx('code-content')}>
                            <code style={{ lineHeight: '2rem' }}>
                                <p className={cx('line-1')}>
                                    <span className={cx('c-y')}>.rect</span> <span>&#123;</span>
                                </p>

                                <p className={cx('line-2')}>
                                    <span className={cx('c-p')}>background</span>
                                    <span>:</span>
                                    <span className={cx('c-y')}>linear-gradient (</span>
                                </p>

                                <p className={cx('line-3')}>
                                    <span className={cx('c-o')}>-119deg,</span>
                                </p>

                                <p className={cx('line-4')}>
                                    <span className={cx('c-y')}>$gray</span> <span className={cx('c-o')}> 0%,</span>
                                </p>

                                <p className={cx('line-5')}>
                                    <span className={cx('c-y')}>$dark-gray </span>
                                    <span className={cx('c-o')}>
                                        100%
                                        <span className={cx('c-y')}>&#41;</span>
                                        <span>&#59;</span> <span>&#125;</span>
                                    </span>
                                </p>
                            </code>
                        </div>
                    </div>
                    <div className={cx('code', 'code-js')}>
                        <header>
                            <Settings className={cx('icon')} />

                            <h1>JS</h1>

                            <KeyboardArrowDown className={cx('icon')} />
                        </header>
                        <div className={cx('code-content')}>
                            <code>
                                <span className={cx('c-y')}>var</span> <span className={cx('c-b')}>colors</span> = [
                                <span className={cx('c-g')}>“#74B087”</span>,{' '}
                                <span className={cx('c-g')}>“#DE7300”</span>,{' '}
                                <span className={cx('c-g')}>“#74B087”</span>];
                                <span className={cx('c-c', 'block')} style={{ marginTop: '10px' }}>
                                    // Do the thing
                                </span>
                                <span className={cx('c-y', 'block')}>
                                    function <span className={cx('c-b')}>animate</span>() {}
                                </span>
                            </code>
                        </div>
                    </div>
                    <div class="editor-block"></div>
                </div>

                {/* PAGE 404 */}
                <div className={cx('content')}>
                    <h4>404</h4>
                    <p>The Page you were looking for, couldn't be found.</p>
                    <Button className={cx('button')} primary to={config.routes.home}>
                        Back to home
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Page404;
