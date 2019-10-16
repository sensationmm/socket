import { mount } from 'enzyme';
import * as React from 'react';

import * as KEYS from '@somo/pda-utils-keyboard/src';
import Select, { FormSelectType } from '.';

describe('<Select />', () => {
  let wrapper;
  const changeMock = jest.fn();
  const createTextNodeMock = jest.spyOn(document, 'createTextNode');
  const mockEvent = {
    target: {
      innerText: 'boo',
      dataset: {
        val: 'opt1',
      },
    },
  };

  const selectProps = {
    label: '',
    value: '',
    type: FormSelectType.Inline,
    onChange: changeMock,
    options: [{ val: 'opt1', label: 'option 1' }, { val: 'opt2', label: 'option 2' }],
    defaultOptionText: 'select option',
    error: '',
  };

  const closeListMock = jest.spyOn(Select.prototype, 'closeList');
  const focusNextListItemMock = jest.spyOn(Select.prototype, 'focusNextListItem');
  const setSelectedListItemMock = jest.spyOn(Select.prototype, 'setSelectedListItem');

  beforeEach(() => {
    wrapper = mount(<Select {...selectProps} />);
  });

  it('renders without error', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders passed value', () => {
    const altProps = {
      ...selectProps,
      value: 'boo',
    };
    wrapper = mount(<Select {...altProps} />);

    expect(wrapper.find('#dropdown-selected').text()).toEqual('boo');
  });

  it('liOnClick()', () => {
    wrapper.instance().liOnClick(mockEvent);

    expect(setSelectedListItemMock).toHaveBeenCalledWith(mockEvent);
    expect(closeListMock).toHaveBeenCalled();
  });

  it('liOnKeyDown()', () => {
    wrapper.instance().liOnKeyDown({ keyCode: KEYS.KEY_ENTER, ...mockEvent });
    expect(setSelectedListItemMock).toHaveBeenCalledWith({ keyCode: KEYS.KEY_ENTER, ...mockEvent });
    expect(closeListMock).toHaveBeenCalledTimes(1);

    wrapper.instance().liOnKeyDown({ keyCode: KEYS.KEY_ESCAPE });
    expect(closeListMock).toHaveBeenCalledTimes(2);

    wrapper.instance().liOnKeyDown({ keyCode: KEYS.KEY_ARROW_UP });
    expect(focusNextListItemMock).toHaveBeenCalledWith(KEYS.KEY_ARROW_UP);
    expect(focusNextListItemMock).toHaveBeenCalledTimes(1);

    wrapper.instance().liOnKeyDown({ keyCode: KEYS.KEY_ARROW_DOWN });
    expect(focusNextListItemMock).toHaveBeenCalledWith(KEYS.KEY_ARROW_DOWN);
    expect(focusNextListItemMock).toHaveBeenCalledTimes(2);
  });

  it('setSelectedListItem()', () => {
    wrapper.instance().setSelectedListItem(mockEvent);

    expect(changeMock).toHaveBeenCalledWith('opt1');
    expect(createTextNodeMock).toHaveBeenCalledWith('boo');
  });

  it('closeList()', () => {
    wrapper.instance().closeList();

    expect(wrapper.state().open).toEqual(false);
  });

  it('toggleListVisibility() prev', () => {
    wrapper.instance().toggleListVisibility({
      type: 'keyPress',
      keyCode: KEYS.KEY_ARROW_UP,
    });

    expect(focusNextListItemMock).toHaveBeenCalledWith(KEYS.KEY_ARROW_UP);
  });

  it('toggleListVisibility() next', () => {
    wrapper.instance().toggleListVisibility({
      type: 'keyPress',
      keyCode: KEYS.KEY_ARROW_DOWN,
    });

    expect(focusNextListItemMock).toHaveBeenCalledWith(KEYS.KEY_ARROW_DOWN);
  });

  it('toggleListVisibility() click', () => {
    wrapper.instance().toggleListVisibility({
      type: 'click',
    });

    expect(wrapper.state().open).toEqual(true);
  });

  it('toggleListVisibility() click', () => {
    wrapper.instance().toggleListVisibility({
      type: 'keyPress',
      keyCode: KEYS.KEY_ESCAPE,
    });

    expect(closeListMock).toHaveBeenCalled();
  });

  afterEach(() => {
    closeListMock.mockClear();
    focusNextListItemMock.mockClear();
    setSelectedListItemMock.mockClear();
  });
});
