import React from 'react';
import { connect } from 'react-redux';
import { Layout, StatementContent } from '../../components';
import initialState from '../../redux/reducers/initialState.js';
import { getTransactions } from '../../redux/actions/transactionActions';

const transactions = initialState.transactions;

class StatementPage extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.getTransactions();
  // }

  showMore() {
    console.log('show more');
  }

  render() {
    return (
      <Layout title="Statement">
        <StatementContent onClickshowMore={this.showMore} transactions={transactions} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { transactionReducer } = state;
  const { transactions } = transactionReducer;

  return {

  };
};

const mapDispatchToEvents = (dispatch) => {
  return {
    getTransactions: () => {
      dispatch(getTransactions());
    }
  };
};

export default StatementPage;
