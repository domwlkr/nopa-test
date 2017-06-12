import React from 'react';
import BankItem from './BankItem';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const bank = {
  name: 'Barclays',
  logo: 'test-file-stub'
};

const onSelectBank = jest.fn();

test('Renders correctly', () => {
  const bankItem = renderer.create(
    <BankItem bank={bank} onSelectBank={onSelectBank} />
  ).toJSON();

  expect(bankItem).toMatchSnapshot();
});

test('Displays the correct bank', () => {
  const bankItem = shallow(
    <BankItem bank={bank} onSelectBank={onSelectBank} />
  );

  expect(bankItem.instance().props.bank.name).toEqual('Barclays');
});

test('Item click event fired', () => {
  const bankItem = shallow(
    <BankItem bank={bank} onSelectBank={onSelectBank} />
  );

  bankItem.simulate('click');

  expect(onSelectBank).toHaveBeenCalled();
});