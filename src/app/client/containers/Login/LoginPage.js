import React from 'react';
import {connect} from 'react-redux';
import { Layout, LoginForm } from '../../components';

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
      errors: {
        surname: '',
        sortCode: '',
        accountNumber: '',
        passCode: '',
        memorableWord: ''
      }
    };
  }

  handleChange(event) {
    let newState = this.state;

    newState.formData[event.target.name] = event.target.value;

    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.validate();
  }

  validate() {
    let newState = this.state;
    let errors = {};

    if (this.state.formData.surname.length < 1) {
      errors.surname = 'Please enter a surname';
    }

    if (this.state.formData.sortCode.length < 1) {
      errors.sortCode = 'Please enter a sort code';
    }

    if (this.state.formData.accountNumber.length < 1) {
      errors.accountNumber = 'Please enter an account number';
    }

    if (this.state.formData.passCode.length < 1) {
      errors.passCode = 'Please enter a pass code';
    }

    if (this.state.formData.memorableWord.length < 1) {
      errors.memorableWord = 'Please enter a memorable word';
    }

    newState.errors = errors;

    this.setState(newState);
  }

  render() {
    return (
      <Layout title="Login">
        <div className="main-content">
          <h1>Which bank does this account belong to?</h1>
          <p>Track all of your payments by connecting as many bank accounts as you'd<br />
            like to your Nopa account and get updates on your balance instantly. Plus it's free.</p>

            <LoginForm
              handleChange={(event) => this.handleChange(event)}
              handleSubmit={(event) => this.handleSubmit(event)}
              errors={this.state.errors} />
        </div>
      </Layout>
    );  
  }
  
}

export default LoginPage;
