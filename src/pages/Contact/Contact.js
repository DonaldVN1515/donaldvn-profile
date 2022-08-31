import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Pause, PlayArrow, LocationOn, Phone } from '@mui/icons-material';

import styles from './Contact.module.scss';
import Overlay from '~/components/Overlay/Overlay';
import songs from '~/assets/music';
import Button from '~/components/Buttton';
import RadioItem from '~/components/RadioItem';
import InputItem from '~/components/InputItem';
import { Checkbox } from '@mui/material';

Contact.propTypes = {};

function Contact() {
    const cx = classNames.bind(styles);

    const [isActive, setIsActive] = useState(false);

    const audioRef = useRef();
    const handlePlayer = () => {
        isActive ? audioRef.current.pause() : audioRef.current.play();
        setIsActive(!isActive);
    };

    return (
        <div className={cx('wrapper')}>
            {/* INTRO - MUSIC */}
            <div className={cx('container-intro')}>
                <Overlay />
                <div className={cx('intro')}>
                    <div className={cx('intro-music', isActive ? 'active' : false)} onClick={handlePlayer}>
                        <div className={cx('intro-play')}>
                            <PlayArrow className={cx('play', 'icon')} />
                        </div>
                        <div className={cx('intro-pause')}>
                            <Pause className={cx('pause', 'icon')} />
                        </div>
                    </div>
                    <audio src={songs.song2} ref={audioRef} loop className={cx('audio')} />
                    <div className={cx('intro-title')}>
                        <h4>"Hi, I am Quoc Viet"</h4>
                        <p>Web developer</p>
                    </div>
                </div>
            </div>

            {/* CONTACT */}
            <div className={cx('container-contact')}>
                <Overlay />
                <div className={cx('contact')}>
                    <div className={cx('contact-infor')}>
                        <h6>Hello! I am Quoc Viet</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus
                            sollicitudin pellentesque et non erat.
                        </p>
                        <div className={cx('contact-about')}>
                            <div className={cx('contact-location')}>
                                <LocationOn className={cx('icon')} />

                                <span>Location</span>
                                <p>18 To Vinh Dien, Chu Se, Gia Lai</p>
                                <p>66 Vo Van Tan, Thanh Khe, Da Nang</p>
                            </div>
                            <div className={cx('contact-me')}>
                                <Phone className={cx('icon')} />

                                <span>Call Us</span>
                                <p>
                                    <span>Phone: </span>
                                    <Button className={cx('contact-button')} text href="tel:0329702303">
                                        0329702303
                                    </Button>
                                </p>
                                <p>
                                    <span>Email: </span>
                                    <Button
                                        className={cx('contact-button')}
                                        text
                                        href="mailto:vietplqbdaf200035@fpt.edu.vn"
                                    >
                                        vietplqbdaf200035@fpt.edu.vn
                                    </Button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <form className={cx('contact-form')}>
                        <h6>Get In Touch</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <InputItem label="Name" required />
                        <InputItem label="Email" required type="Email" />

                        <div className={cx('contact-radio')}>
                            <RadioItem label="I need a Coder" />
                            <RadioItem label="I need help in Finance" />
                            <RadioItem label="I need other problem" isChecked />
                        </div>

                        <InputItem label="Give me your question" />
                        <InputItem label="What when you be meet me?" />

                        <InputItem label="Detail of your issue" multiline rows={5} />

                        <Button className={cx('contact-submit')} primary>
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
            {/* FOLLOW */}
            <div className={cx('container-follow')}>
                <Overlay className={cx('overlay')} />
                <div className={cx('follow')}>
                    <h6>FOLLOW ME</h6>
                    <p>If you love me, let's follow me to get more information.</p>

                    <form className={cx('follow-form')}>
                        <InputItem label="Email" type="Email" required className={cx('follow-input')} />
                        <div className={cx('follow-policy')}>
                            <Checkbox
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 20 },
                                    color: '#a17560',
                                    '&.Mui-checked': {
                                        color: '#a17560',
                                    },
                                }}
                            />
                            <label>
                                I agree with the Terms of Use and Privacy Policy and I declare that I have read the
                                information that is required in accordance with Article 13 of GDPR.
                            </label>
                        </div>
                        <div className={cx('follow-btn')}>
                            <Button className={cx('follow-submit')} primary>
                                Subscribe
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={cx('footer')}>
                    <h6>© Profile 2022. Design by DONALDVN</h6>
                </div>
            </div>
        </div>
    );
}

export default Contact;
