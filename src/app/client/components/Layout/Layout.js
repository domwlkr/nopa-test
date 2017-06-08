import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../redux/actions/formActions';
import { Header, Footer, Partners } from '../';
import { browserHistory } from 'react-router';

export class Layout extends React.Component {
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
      <section className={this.props.routeClass}>
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
  title: React.PropTypes.string.isRequired,
  routeClass: React.PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
  bank: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
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
