import React, {PropTypes} from 'react';
import Button from '../Button/Button';
import * as Paths from '../../constants/paths';
import logo from '../../../static/images/Logo_Nopa.svg';

const Header = (props) => {
  const loginButton = !props.loggedIn ? <Button to={Paths.LOGIN_BANK}>Log In</Button> : <Button onClick={props.onLogoutClick}>Log Out</Button>;

  return (
    <div className="header">
      <img className="logo" src={logo} />
      <div className="login">
        {loginButton}
      </div>
    </div>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  onLogoutClick: PropTypes.func.isRequired
};

export default Header;
