import React from 'react';

import Header from './header';

export default OriginalComponent => {
	return props => {
		return (
			<React.Fragment>
				<Header />
				<OriginalComponent {...props} />
			</React.Fragment>
		);
	};
};
