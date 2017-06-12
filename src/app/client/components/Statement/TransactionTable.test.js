import React from 'react';
import TransactionsTable from './TransactionsTable';
import renderer from 'react-test-renderer';

const singleTransaction = [{'id': 1, 'dateStr': 'Now', 'beneficary': 'PAYPAL ZARA', 'value': '- £35.98'}];

test('Renders correctly', () => {
  const transactionsTable = renderer.create(
    <TransactionsTable transactions={singleTransaction} />
  ).toJSON();

  expect(transactionsTable).toMatchSnapshot();
});