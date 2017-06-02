import React from 'react';
import { Layout, Button } from '../../components';
import initialState from '../../redux/reducers/initialState.js';
import * as Paths from '../../constants/paths';

const bankList = initialState.bankList;

const ChooseBankPage = (props) => {
  return (
    <Layout title="Chose your bank">
      <div className="main-content">
        <h1>Which bank does this account belong to?</h1>
        <p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa<br />
          account and get updates on your balance instantly.</p>

        <div className="bank-list">
            {
              bankList.map(bank => <div key={bank.name}><img alt={bank.name} src={bank.logo} /></div>)
            }
        </div>

        <Button to={Paths.LOGIN_BANK} className="button">Get started</Button>

      </div>
    </Layout>
  );
};

export default ChooseBankPage;
