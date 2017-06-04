import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Layout, ChooseBankContent } from '../../components';
import { bankSelect } from '../../redux/actions/bankActions';

class ChooseBankPage extends React.Component {
  constructor(props) {
    super(props);
    this.selectBank = this.selectBank.bind(this);
    this.chooseBank = this.chooseBank.bind(this);
  }

  selectBank(bank) {
    this.props.bankSelect(bank);
  }

  chooseBank(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Layout title="Chose your bank">
        <ChooseBankContent onSelectBank={this.selectBank}
          onContinue={this.chooseBank} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { bankReducer } = state;
  const { bank } = bankReducer;
  return {
    bank
  };
};

const mapDispatchToEvents = (dispatch) => {
  return {
    bankSelect: (bank) => {
      dispatch(bankSelect(bank));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToEvents)(ChooseBankPage);
