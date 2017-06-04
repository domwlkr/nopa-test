import React from 'react';
import { Button } from '../index';
import logo from '../../../static/images/Logo_Nopa.svg';
import * as Paths from '../../constants/paths';

const HomeIntro = (props) => {
  return (
    <div className="main-content home-intro">
      <div className="logo">
        <img className="Nopa" alt="Logo" src={logo} />
      </div>

      <h1>Your finances, in one place</h1>
      <p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa account and get updates on your balance instantly.</p>

      <Button to={Paths.CHOOSE_BANK} className="button">Get started</Button>
    </div>
  );
};

export default HomeIntro;