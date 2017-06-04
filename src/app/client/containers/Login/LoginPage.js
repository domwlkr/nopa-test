import React from 'react';
import {connect} from 'react-redux';
import { Layout, LoginForm } from '../../components';
import { formSubmitSuccess } from '../../redux/actions/formActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        surname: '',
        sortCode: '',
        accountNumber: '',
        passCode: '',
        memorableWord: ''  
      },
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let newState = this.state;

    newState.formData[e.target.name] = e.target.value;

    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validate()) return;

    this.props.formSubmit(this.state.formData);
  }

  validate() {
    let valid = true;
    let errors = {};

    if (this.state.formData.surname.length < 1) {
      errors.surname = 'Please enter a surname';
      valid = false;
    }

    if (this.state.formData.sortCode.length < 1) {
      errors.sortCode = 'Please enter a sort code';
      valid = false;
    }

    if (this.state.formData.accountNumber.length < 1) {
      errors.accountNumber = 'Please enter an account number';
      valid = false;
    }

    if (this.state.formData.passCode.length < 1) {
      errors.passCode = 'Please enter a pass code';
      valid = false;
    }

    if (this.state.formData.memorableWord.length < 1) {
      errors.memorableWord = 'Please enter a memorable word';
      valid = false;
    }

    this.setState({errors: errors});
    return valid;
  }

  render() {
    return (
      <Layout title="Login">
        <div className="main-content">
          <h1>Which bank does this account belong to?</h1>
          <p>Track all of your payments by connecting as many bank accounts as you'd<br />
            like to your Nopa account and get updates on your balance instantly. Plus it's free.</p>

            <LoginForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              errors={this.state.errors} />
        </div>
      </Layout>
    );  
  }
}

const mapStateToProps = (state) => {
  const { formReducer } = state;
  const { form } = formReducer;

  return {
    form
  };
};

const mapDispatchToEvents = (dispatch) => {
  return {
    formSubmit: (details) => {
      dispatch(formSubmitSuccess(details));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToEvents)(LoginPage);