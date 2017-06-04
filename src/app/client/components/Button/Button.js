import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const Button = (props) => {
  return (
    <Link {...props} className="button">
      {props.children}
    </Link>
  );
};

Button.propTypes = {
  buttonClass: PropTypes.string
};

export default Button;
