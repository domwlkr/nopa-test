import React, {PropTypes} from 'react';
import Transaction from './Transaction';

const TransactionDate = (props) => {
  const transactionBlocks = props.date.map((transaction, index) => (
    <Transaction key={index} transaction={transaction} />
  ));

  console.log(props);

  return (
    <div>
      <span>Hiya</span>
      {transactionBlocks}
    </div>
  )
}

export default TransactionDate;