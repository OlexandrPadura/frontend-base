import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './style.scss';

const SelectWrapper = ({ name, options = [], placeholder, required = false, className }) => {
	const customStyles = {
		control: provided => ({
			...provided,
			borderRadius: 0,
			height: '45px'
		})
	};
	console.log(required, 'required');
	return <Select className={className} name={name} styles={customStyles} placeholder={placeholder} required={required} options={options} />;
};

SelectWrapper.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	className: PropTypes.string
};

export default SelectWrapper;
