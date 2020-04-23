import React, { useState, useEffect } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import './style.scss';
import { initUser, logout } from '../../../reducers/user';
import logo from '../../../img/logo.png';
import buttonDown from '../../../img/button-down.png';

const Header = ({
	name,
	logout,
	push,
	router: {
		location: { pathname }
	},
	initUser
}) => {
	useEffect(() => {
		if (!name) {
			initUser();
		}
	}, []);
	const [showDropDown, setDropDown] = useState(false);
	const toogleDropDown = () => setDropDown(!showDropDown);
	return (
		<div className="headerBox">
			<img src={logo} alt="Logo" className="headerLogo" />
			<div className="headerButtons">
				<div className={`headerButton pointer ${pathname === '/sponsored' && 'activeButton'}`} onClick={() => push('/sponsored')}>
					Sponsored
				</div>
				<div className={`headerButton pointer ${pathname === '/pushed' && 'activeButton'}`} onClick={() => push('/pushed')}>
					Gepushte
				</div>
			</div>
			<div className="headerUser pointer" onClick={toogleDropDown}>
				<div className="userName">Hallo, {name}</div> <img src={buttonDown} alt="arrow" className="arrowBottom" />
				{showDropDown && (
					<div className="headerDrop">
						<div onClick={logout} className="pointer">
							Ausloggen
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = ({ router, user: { name } }) => ({ router, name });

export default connect(mapStateToProps, { push, initUser, logout })(Header);
