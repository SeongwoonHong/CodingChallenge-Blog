import React from 'react';
import { shallow } from 'enzyme';
import TextButton from './TextButton';

describe('<TextButton>', () => {
  it('shows a proper text', () => {
    const textButton = shallow(<TextButton>test</TextButton>);
    expect(textButton.text()).toEqual('test');
  });

  it('onClick method is working', () => {
    const mockOnclick = jest.fn();
    const props = { onClick: mockOnclick };
    const textButton = shallow(<TextButton {...props}>test</TextButton>);
    textButton.find('.btn').simulate('click');
    expect(mockOnclick).toHaveBeenCalled();
  });
});
