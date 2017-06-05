import React from 'react';
import TransactionDate from './TransactionDate';

const TransactionsTable = (props) => {
  const datesFiltered = props.transactions.transactions !== undefined 
    ? props.transactions.transactions.reduce((result, current) => {
      result[current.dateStr] = result[current.dateStr] || [];
      result[current.dateStr].push(current );
      return result;
  }, [])
  : [];

  let dates = [];

  for (let key in datesFiltered) {
    if (datesFiltered.hasOwnProperty(key)) {
      dates.push(datesFiltered[key]);
    }
  }

  const transactionDatesBlocks = dates.map((date, index) => (
    <TransactionDate key={index} date={date} />
  ));

  return (
    <div className="table-wrap">
      <span>Your transactions for the last 30 days</span>
      <div className="transactions-table">

      </div>
    </div>
  );
};

export default TransactionsTable;