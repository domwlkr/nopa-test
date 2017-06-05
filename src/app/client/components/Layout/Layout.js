import React from 'react';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../redux/actions/formActions';
import { Header, Footer, Partners } from '../';
import { browserHistory } from 'react-router';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount () {
    document.title = this.props.title;
  }

  logOut() {
    this.props.logout();
    browserHistory.push('/');
  }

  render () {
    return (
      <section>
        <Header loggedIn={this.props.loggedIn}
          bank={this.props.bank}
          onLogoutClick={this.logOut} />
        <div className="layout">
          {this.props.children}
        </div>
        <Partners />
        <Footer />
      </section>
    );
  }
}

Layout.propTypes = {
  title: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.formReducer.form.loggedIn,
    bank: state.bankReducer.bank
  };
};

const mapDispatchToEvents = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutSuccess());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToEvents)(Layout);
