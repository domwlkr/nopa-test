import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Layout, StatementContent } from '../../components';
import { getTransactions, getTransactionsSuccess, getTransactionsFail } from '../../redux/actions/transactionActions';
import { browserHistory } from 'react-router';

class StatementPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // if (!this.props.loggedIn) browserHistory.push('/');

    this.props.getTransactions();
  }

  showMore() {

  }

  render() {
    return (
      <Layout title="Statement">
        <StatementContent onClickshowMore={this.showMore}
          bank={this.props.bank}
          accountDetails={this.props.accountDetails}
          transactions={this.props.transactions}
          loading={this.props.loading} />
      </Layout>
    );
  }
}

StatementPage.propTypes = {
  accountDetails: PropTypes.object,
  loading: PropTypes.bool,
  bank: PropTypes.object,
  showMore: PropTypes.func,
  transactions: PropTypes.object,
  getTransactions: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    transactions: state.transactionReducer.transactions,
    loading: state.transactionReducer.loading,
    accountDetails: state.formReducer.form.formData,
    loggedIn: state.formReducer.form.loggedIn,
    bank: state.bankReducer.bank
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: () => {
      dispatch(getTransactions()).then((response) => {
        let data = response.payload.data ? response.payload.data.transactions : [{errors: {data : 'Network Error'}}];

        !response.error ? dispatch(getTransactionsSuccess(data)) : dispatch(getTransactionsFail(data));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatementPage);
