import React from 'react';
import { Button } from '../index';
import TransactionsTable from './TransactionsTable';
import * as Paths from '../../constants/paths';

const StatementContent = (props) => {
  return (
    <div className="main-content">
      <h1>Your finances, in one place</h1>
      <p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa account and get updates on your balance instantly.</p>

      <TransactionsTable transactionList={props.transactions} />
      <Button onClick={props.showMore} className="button">Show more</Button>
    </div>
  );
};

export default StatementContent;