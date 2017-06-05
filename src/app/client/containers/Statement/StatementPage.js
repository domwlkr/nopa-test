import React from 'react';
import { connect } from 'react-redux';
import { Layout, StatementContent } from '../../components';
import { getTransactions, getTransactionsSuccess, getTransactionsFail } from '../../redux/actions/transactionActions';

class StatementPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getTransactions();
  }

  showMore() {

  }

  render() {
    return (
      <Layout title="Statement">
        <StatementContent onClickshowMore={this.showMore} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactionReducer.transactions,
    loading: state.transactionReducer.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTransactions: () => {
      return dispatch(getTransactions()).then((response) => {
        let data = response.payload.data ? response.payload.data : {data : 'Network Error'};

        console.log(data);

        !response.error ? dispatch(getTransactionsSuccess(data)) : dispatch(getTransactionsFail(data));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatementPage);
