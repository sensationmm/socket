import { shallow } from 'enzyme';
import React from 'react';

import Text, { ColorStyles } from '@somo/pda-components-text/src';

import RadioGroup, { Radio } from '.';

describe('<Radio />', () => {
  let wrapper;

  const props = {
    value: 'yes',
    label: 'Yes',
    name: 'test',
    id: 'test',
    isChecked: false,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<Radio {...props} />);
  });

  it('renders without error', () => {
    const component = wrapper.find('[data-test="component-radio"]');
    expect(component.length).toBe(1);

    const label = wrapper.find(Text);
    expect(label.props().color).toBe(ColorStyles.primary);
  });

  it('renders checked style', () => {
    wrapper = shallow(<Radio {...props} isChecked={true} />);
    const label = wrapper.find(Text);
    expect(label.props().color).toBe(ColorStyles.secondary);
  });
});

describe('<RadioGroup />', () => {
  let wrapper;
  let props;
  const mockOnChange = jest.fn();
  const mockEvent = (val) => {
    return {
      target: {
        value: val,
      },
    };
  };

  beforeEach(() => {
    props = {
      items: [
        {
          label: 'no',
          value: 'no',
        },
        {
          label: 'yes',
          value: 'yes',
        },
        {
          label: 'true',
          value: 'true',
        },
        {
          label: 'false',
          value: 'false',
        },
      ],
      name: 'radioGroup',
      handleChange: mockOnChange,
      value: '',
      groupLabel: 'is this a question?',
      hidden: false,
      selectedValue: 'true',
    };

    wrapper = shallow(<RadioGroup {...props} />);
  });

  it('renders without error', () => {
    const component = wrapper.find('[data-test="component-radio-group"]');
    expect(component.length).toBe(1);
  });

  it('renders and is hidden', () => {
    wrapper = shallow(<RadioGroup {...props} hidden={true} />);
    const component = wrapper.find('[data-test="component-radio-group"]');
    expect(component.length).toBe(1);
  });

  it('on child `radio` change fire onChange', () => {
    const component = wrapper.find('[data-test="component-radio-group"]');

    const radio = component
      .find(Radio)
      .first()
      .props();

    radio.onChange(mockEvent(radio.value));
    expect(mockOnChange).toHaveBeenCalledWith('no');
  });

  it('handles string boolean true', () => {
    const component = wrapper.find('[data-test="component-radio-group"]');

    const radio = component
      .find(Radio)
      .at(2)
      .props();

    radio.onChange(mockEvent(radio.value));
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('handles string boolean false', () => {
    const component = wrapper.find('[data-test="component-radio-group"]');

    const radio = component
      .find(Radio)
      .at(3)
      .props();

    radio.onChange(mockEvent(radio.value));
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
