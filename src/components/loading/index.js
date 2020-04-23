import React from 'react';
import spiner from '../../img/spiner.png';
import './style.scss';

export default ({ loaded = true, children }) =>
	loaded ? (
		<div>{children}</div>
	) : (
		<div className="loading">
			<img className="spiner-loading" src={spiner} />
		</div>
	);
