import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Layout, ChooseBankContent } from '../../components';
import { bankSelect } from '../../redux/actions/bankActions';
import { browserHistory } from 'react-router';

class ChooseBankPage extends React.Component {
  constructor(props) {
    super(props);
    this.selectBank = this.selectBank.bind(this);
    this.chooseBank = this.chooseBank.bind(this);
    this.state = {
      selectedBank: '',
      error: ''
    };
  }

  selectBank(bank) {
    this.props.bankSelect(bank);
    this.setState({selectedBank: bank.name});
  }

  chooseBank(e) {
    e.preventDefault();
    if (this.props.bank === undefined) {
      this.setState({error: 'Please select a bank'});
    }
    else {
      browserHistory.push('/login');
    }
  }

  render() {
    return (
      <Layout title="Chose your bank">
        <ChooseBankContent onSelectBank={this.selectBank}
          onContinue={this.chooseBank}
          selectedBank={this.state.selectedBank}
          error={this.state.error} />
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
