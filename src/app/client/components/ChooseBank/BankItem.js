import React, { PropTypes} from 'react';

const BankItem = (props) => {
  return (
    <li className={"bank-item " + (props.isSelected ? 'selected' : '')} onClick={() => props.onSelectBank(props.bank)}>
      <img className="bank-image" alt={props.bank.name} src={props.bank.logo} />
    </li>
  );
};

BankItem.proptypes = {
  bank: PropTypes.object.isRequired,
  onSelectBank: PropTypes.func.isRequired
};

export default BankItem;