import { shallow } from 'enzyme';
import React from 'react';

import { Outline, Primary } from '@somo/pda-components-button/src';

import Component from '.';

describe('SaveCancel', () => {
  let wrapper;
  let buttonCancel;
  let buttonSave;

  const saveMock = jest.fn();
  const cancelMock = jest.fn();

  const props = {
    actionPrimary: saveMock,
    actionSecondary: cancelMock,
  };

  beforeEach(() => {
    wrapper = shallow(<Component {...props} />);
    buttonCancel = wrapper.find(Outline);
    buttonSave = wrapper.find(Primary);
  });

  it('should render without error', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render with default props', () => {
    expect(buttonCancel.props().disabled).toBe(false);
    expect(buttonSave.props().disabled).toBe(false);
    expect(buttonCancel.props().children).toBe('actions.cancel');
    expect(buttonSave.props().children).toBe('actions.save');
  });

  it('should fire actions', () => {
    buttonSave.simulate('click');
    buttonCancel.simulate('click');

    expect(saveMock).toHaveBeenCalledTimes(1);
    expect(cancelMock).toHaveBeenCalledTimes(1);
  });

  it('should render disabled', () => {
    wrapper = shallow(<Component {...props} disabled={true} />);

    buttonCancel = wrapper.find(Outline);
    buttonSave = wrapper.find(Primary);

    expect(buttonCancel.props().disabled).toBe(true);
    expect(buttonSave.props().disabled).toBe(true);
  });

  it('should render label overrides', () => {
    wrapper = shallow(<Component {...props} labelPrimary={'save override'} labelSecondary={'cancel override'} />);

    buttonCancel = wrapper.find(Outline);
    buttonSave = wrapper.find(Primary);

    expect(buttonCancel.props().children).toBe('cancel override');
    expect(buttonSave.props().children).toBe('save override');
  });

  it('should omit cancel button', () => {
    wrapper = shallow(<Component actionPrimary={jest.fn()} />);

    buttonCancel = wrapper.find(Outline);

    expect(buttonCancel.length).toBe(0);
  });
});
