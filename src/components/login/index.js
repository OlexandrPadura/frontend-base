import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { initUser } from '../../reducers/user';

const Login = ({ initUser, user }) => {
	return (
		<Container>
			<Row>
				<Col sm={4}>
					<button onClick={() => initUser({ name: 'Sasha' })}> Init User </button>
				</Col>
				<Col sm={4}>
					<div>User name : {user && user.name}</div>
				</Col>
			</Row>
		</Container>
	);
};

Login.propTypes = {
	// name : PropTypes.string
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { initUser })(Login);
