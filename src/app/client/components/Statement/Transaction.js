import React, {PropTypes} from 'react';

const Transaction = (props) => {
  return (
    <div className="transaction">
      <span>{props.transaction.beneficary}</span>
      <span>{props.transaction.value}</span>
    </div>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object
};

export default Transaction;