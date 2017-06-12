import React from 'react';
import BankList from './BankList';
import initialState from '../../redux/reducers/initialState.js';
import renderer from 'react-test-renderer';

const bankList = initialState.bankList;
const onSelectBank = jest.fn();
const selectedBank = {
  name: 'Barclays',
  logo: 'test-file-stub'
};

test('Renders correctly', () => {
  const tree = renderer.create(
    <BankList bankList={bankList} onSelectBank={onSelectBank} selectedBank={selectedBank} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});