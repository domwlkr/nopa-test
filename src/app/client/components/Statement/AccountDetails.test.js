import React from 'react';
import AccountDetails from './AccountDetails';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const bank = {name: 'Barclays', logo: 'test-file-stub'};
const details = {surname: 'Walker', accountNumber: '90909090', sortCode: '220099'};

test('Renders correctly', () => {
  const accountDetails = renderer.create(
    <AccountDetails bank={bank} accountDetails={details} />
  ).toJSON();

  expect(accountDetails).toMatchSnapshot();
});


test('Displays the correct bank', () => {
  const accountDetails = shallow(
    <AccountDetails bank={bank} accountDetails={details} />
  );

  expect(accountDetails.instance().props.bank.name).toEqual('Barclays');
});


test('Displays the correct account number', () => {
  const accountDetails = shallow(
    <AccountDetails bank={bank} accountDetails={details} />
  );

  expect(accountDetails.instance().props.accountDetails.accountNumber).toEqual('90909090');
});


test('Displays the correct sort code', () => {
  const accountDetails = shallow(
    <AccountDetails bank={bank} accountDetails={details} />
  );

  expect(accountDetails.instance().props.accountDetails.sortCode).toEqual('220099');
});


test('Displays the surname', () => {
  const accountDetails = shallow(
    <AccountDetails bank={bank} accountDetails={details} />
  );

  expect(accountDetails.instance().props.accountDetails.surname).toEqual('Walker');
});