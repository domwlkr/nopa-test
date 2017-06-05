import React from 'react';
import { Button } from '../index';
import AccountDetails from './AccountDetails';
import TransactionsTable from './TransactionsTable';
import * as Paths from '../../constants/paths';

const StatementContent = (props) => {
  return (
    <div className="main-content">
      <AccountDetails accountDetails={props.accountDetails} bank={props.bank} />
      <TransactionsTable transactions={props.transactions}
        loading={props.loading} />
      <Button onClick={props.showMore} className="button">Show more</Button>
    </div>
  );
};

export default StatementContent;