import React, {PropTypes} from 'react';
import Button from '../Button/Button';
import * as Paths from '../../constants/paths';
import logo from '../../../static/images/Logo_Nopa.svg';

const Header = (props) => {
  let loginButton;

  if (!props.loggedIn && props.bank.name === undefined) {
    loginButton = <Button to={Paths.CHOOSE_BANK}>Log In</Button>;
  }
  else if (!props.loggedIn && props.bank !== undefined) {
    loginButton = <Button to={Paths.LOGIN_BANK}>Log In</Button>;
  }
  else {
    loginButton = <Button onClick={props.onLogoutClick}>Log Out</Button>;
  }

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
  bank: PropTypes.object.isRequired,
  onLogoutClick: PropTypes.func.isRequired
};

export default Header;
