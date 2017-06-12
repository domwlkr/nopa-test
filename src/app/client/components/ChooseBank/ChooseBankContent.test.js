import React from 'react';
import ChooseBankContent from './ChooseBankContent';
import initialState from '../../redux/reducers/initialState.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

const bankList = initialState.bankList;
const onSelectBank = jest.fn();
const selectedBank = {name: 'Barclays', logo: 'test-file-stub'};
const onContinue = jest.fn();
const error = 'Error message';

test('Renders correctly', () => {
  const chooseBankContent = renderer.create(
    <ChooseBankContent bankList={bankList} onSelectBank={onSelectBank} error={error} onContinue={onContinue} selectedBank={selectedBank} />
  ).toJSON();

  expect(chooseBankContent).toMatchSnapshot();
});

test('Displays error message', () => {
  const chooseBankContent = shallow(
    <ChooseBankContent bankList={bankList} onSelectBank={onSelectBank} error={error} onContinue={onContinue} selectedBank={selectedBank} />
  );

  expect(chooseBankContent.instance().props.error).toEqual('Error message');
});

test('When continue button is clicked event fired', () => {
  const chooseBankContent = shallow(
    <ChooseBankContent bankList={bankList} onSelectBank={onSelectBank} error={error} onContinue={onContinue} selectedBank={selectedBank} />
  );

  chooseBankContent.find('Button').simulate('click');

  expect(onContinue).toHaveBeenCalled();
});