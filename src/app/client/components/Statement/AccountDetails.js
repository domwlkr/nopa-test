import React, {PropTypes} from 'react';

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

AccountDetails.propTypes = {
  accountDetails: PropTypes.object,
  bank: PropTypes.object
};

export default AccountDetails;