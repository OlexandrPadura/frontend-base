import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { set, clear } from '../../../reducers/form';

const Form = ({ form, name, className, children, onSubmit, set, clear }) => {
	const formRef = useRef(null);
	const currentForm = form[name];
	useEffect(() => {
		return () => {
			clear({
				formName: name
			});
		};
	}, []);

	useEffect(() => {
		if (currentForm && !Object.keys(currentForm).length) {
			for (let i = 0; i < formRef.current.length; i++) {
				const item = formRef.current[i];
				if (item.value && item.className !== 'datePickerCustom') {
					item.value = '';
				}
			}
		}
	}, [currentForm]);

	const submit = async e => {
		e.preventDefault();
		const data = {};
		for (let i = 0; i < formRef.current.length; i++) {
			const item = formRef.current[i];
			if (item.name && item.value) {
				data[item.name] = item.value;
			}
		}
		set({
			formName: name,
			data
		});
		onSubmit();
	};
	return (
		<form onSubmit={submit} className={className} ref={formRef}>
			{children}
		</form>
	);
};

Form.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	onSubmit: PropTypes.func
};

export default connect(({ form }) => ({ form }), { set, clear })(Form);
