import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import classNames from 'classnames/bind';

import styles from './InputItem.module.scss';

InputItem.propTypes = {
    multiline: PropTypes.bool,
    required: PropTypes.bool,
    rows: PropTypes.number,
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
};

function InputItem({ multiline = false, required = false, rows, label, type, className }) {
    const cx = classNames.bind(styles);

    return (
        <TextField
            multiline={multiline}
            rows={rows}
            type={type}
            required={required}
            margin="dense"
            size="medium"
            fullWidth
            className={cx('input', className)}
            id="outlined-basic"
            label={label}
            variant="outlined"
            InputLabelProps={{
                style: { color: '#a17560', fontSize: '1.4rem', top: '4px' },
            }}
            sx={{
                '.css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root': {
                    color: '#a17560',
                },
                '.css-1in441m': {
                    fontSize: '1.1rem',
                    marginLeft: '-3px',
                    height: '13px',
                },
                '.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#a17560',
                },
                '.css-1460p85-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#a17560',
                },
            }}
            InputProps={{
                sx: {
                    '.MuiInputBase-input': {
                        fontSize: '2rem',
                    },

                    '&:hover': {
                        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            border: '2px solid #a17560',
                        },
                    },
                },
            }}
        />
    );
}

export default InputItem;
