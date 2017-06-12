import React from 'react';
import StatementContent from './StatementContent';
import renderer from 'react-test-renderer';

const bank = {name: 'Barclays', logo: 'test-file-stub'};
const details = {surname: 'Walker', accountNumber: '90909090', sortCode: '220099'};
const loading = false;
const showMore = jest.fn();
const transactions = [];

test('Renders correctly', () => {
  const statementContent = renderer.create(
    <StatementContent accountDetails={details} loading={loading} bank={bank} showMore={showMore} transactions={transactions} />
  ).toJSON();

  expect(statementContent).toMatchSnapshot();
});