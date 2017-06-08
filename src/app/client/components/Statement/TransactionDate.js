import React, {PropTypes} from 'react';
import Transaction from './Transaction';

const TransactionDate = (props) => {
  const date = props.date[0].dateStr === 'Now' ? 'Today' : props.date[0].dateStr;

  const transactionBlocks = props.date.map((transaction, index) => (
    <Transaction key={index} transaction={transaction} />
  ));

  return (
    <div className="transaction-date-wrap">
      <div className="transaction-date">{date}</div>
      {transactionBlocks}
    </div>
  );
};

TransactionDate.propTypes = {
  date: PropTypes.array
};

export default TransactionDate;