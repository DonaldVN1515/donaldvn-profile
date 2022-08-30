import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Pause, PlayArrow, LocationOn, Phone } from '@mui/icons-material';
import TextField from '@mui/material/TextField';

import styles from './Contact.module.scss';
import Overlay from '~/components/Overlay/Overlay';
import songs from '~/assets/music';
import Button from '~/components/Buttton';
import RadioItem from '~/components/RadioItem';

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
                                <p>66 Vo Van Tan Street, Thanh Khe District, Da Nang City</p>
                            </div>
                            <div className={cx('contact-me')}>
                                <Phone className={cx('icon')} />

                                <span>Call Us</span>
                                <p>
                                    <span>Phone: </span>
                                    <Button className={cx('contact-phone')} text href="tel:0329702303">
                                        0329702303
                                    </Button>
                                </p>
                                <p>
                                    <span>Email: </span>
                                    <Button
                                        className={cx('contact-email')}
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

                        <TextField id="standard-basic" label="Standard" variant="standard" />

                        <TextField id="standard-basic" label="Standard" variant="standard" />

                        <div className={cx('contact-radio')}>
                            <RadioItem label="I need a Coder" />
                            <RadioItem label="I need help in Finance" />
                        </div>
                        <TextField id="standard-basic" label="Standard" variant="standard" />

                        <TextField id="standard-basic" label="Standard" variant="standard" />

                        <TextField id="standard-basic" label="Standard" variant="standard" />

                        <textarea
                            placeholder="Detail your issue"
                            rows="20"
                            name="comment[text]"
                            id="comment_text"
                            cols="40"
                            class="ui-autocomplete-input"
                            autocomplete="off"
                        ></textarea>

                        <Button className={cx('contact-submit')} primary>
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
            <div className={cx('container-follow')}>
                <Overlay className={cx('overlay')} />
                <div className={cx('follow')}></div>
            </div>
        </div>
    );
}

export default Contact;
