import React from 'react';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../redux/actions/formActions';
import { Header, Footer, Partners } from '../';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount () {
    document.title = this.props.title;
  }

  logOut() {
    
  }

  render () {
    return (
      <section>
        <Header loggedIn={this.props.loggedIn}
          onLoginClick={this.logIn}
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
  const { formReducer } = state;
  const { loggedIn } = formReducer;
  return {
    loggedIn
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
