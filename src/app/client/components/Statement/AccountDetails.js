import React from 'react';

const AccountDetails = (props) => {
  return (
    <div className="account-details">
      <div className="account-details__left">
        <span>{props.bank.name}</span>
        <span>{props.accountDetails.surname}</span>
      </div>
      <div className="account-details__right">
        <span>Current account</span>
        <span>{props.accountDetails.accountNumber}</span>
        <span>{props.accountDetails.sortCode}</span>
      </div>
    </div>
  );
};

export default AccountDetails;