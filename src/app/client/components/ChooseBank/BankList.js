import React, { PropTypes } from 'react';
import BankItem from './BankItem';

const BankList = (props) => {
  const banks = props.bankList.map((bank) => (
    <BankItem isSelected={bank.name == props.selectedBank} key={bank.id} bank={bank} onSelectBank={props.onSelectBank} />
  ));

  return (
    <ul className="bank-list">
      {banks}
    </ul>
  );
};

BankList.proptypes = {
  bankList: PropTypes.array.isRequired,
  onSelectBank: PropTypes.func.isRequired
};

export default BankList;