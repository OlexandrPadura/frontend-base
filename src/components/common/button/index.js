import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Loader from '../../loading/small';
const Input = ({ name, type, onClick, disabled, loading, small, className, trasparent, width, icon, noBorder }) => {
	return (
		<button
			type={type || 'button'}
			onClick={onClick}
			disabled={disabled}
			style={width && { width: `${width}px` }}
			className={`commonButton ${small && 'smallBtn'} ${trasparent && 'transparentBtn'} ${noBorder && 'noBorderBtn'} ${className}`}
		>
			{loading ? <Loader loaded={false} /> : icon ? <img src={icon} alt="icon" className="btnIconStyle" /> : name}
		</button>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	small: PropTypes.bool,
	loading: PropTypes.bool
};

export default Input;
