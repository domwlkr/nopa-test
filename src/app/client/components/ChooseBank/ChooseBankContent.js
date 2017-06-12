import React, { PropTypes } from 'react';
import { Button } from '../index';
import initialState from '../../redux/reducers/initialState.js';
import * as Paths from '../../constants/paths';
import BankList from './BankList';

const bankList = initialState.bankList;

const ChooseBankContent = (props) => {
  return (
    <div className="main-content">
      <h1>Which bank does this account belong to?</h1>
      <p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa account and get updates on your balance instantly.</p>

      <BankList bankList={bankList} selectedBank={props.selectedBank} onSelectBank={props.onSelectBank} />

      <div className="error">{props.error}</div> 

      <Button onClick={props.onContinue} className="button">Continue</Button>

    </div>
  );
};

ChooseBankContent.propTypes = {
  bankList: PropTypes.array.isRequired,
  onSelectBank: PropTypes.func.isRequired,
  selectedBank: PropTypes.object.isRequired,
  error: PropTypes.string.isRequired,
  onContinue: PropTypes.func.isRequired
};

export default ChooseBankContent;