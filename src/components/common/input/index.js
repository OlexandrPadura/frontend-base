import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Input = ({ name, type, placeholder, required = false, className, fullBorder = false }) => {
	return (
		<input
			className={`inputStyle ${className} ${fullBorder ? 'inputFullBorder' : 'inputBorderBottom'}`}
			type={type || 'text'}
			name={name}
			placeholder={placeholder || name}
			required={required}
		/>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	required: PropTypes.bool,
	fullBorder: PropTypes.bool,
	className: PropTypes.string
};

export default Input;
