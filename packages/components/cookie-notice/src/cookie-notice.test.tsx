import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { set } from '@somo/pda-utils-cookies/src';
import Component from '.';

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn((props) => (props.in ? <FakeTransition>{props.children}</FakeTransition> : null));

  return { CSSTransition: FakeCSSTransition, Transition: FakeTransition };
});

jest.mock('@somo/pda-utils-cookies/src', () => ({
  get: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(undefined),
  set: jest.fn(),
  CookiesKeys: { allowCookies: 'allowCookies' },
}));

jest.useFakeTimers();

describe('@somo/pda-components-cookie-notice component', () => {
  beforeAll(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });

  const props = {
    title: 'Title',
    text: 'Some text',
    link: {
      text: 'Link',
      address: 'http://localhost',
    },
    cta: {
      agree: 'Agree',
      disagree: 'Disagree',
    },
  };

  it('should set visibility to false if cookie is already set', () => {
    const { container } = render(<Component {...props} />);
    jest.runOnlyPendingTimers();
    expect(container.childNodes.length).toEqual(0);
  });

  it('should set visibility to true if cookie is not set', () => {
    const { getByText, container } = render(<Component {...props} />);
    jest.runOnlyPendingTimers();
    expect(container.childNodes.length).toEqual(1);
    expect(getByText(props.title)).toBeDefined();
    expect(getByText(props.text, { exact: false })).toBeDefined();
    expect(getByText(props.link.text)).toBeDefined();
    expect(getByText(props.cta.agree)).toBeDefined();
    expect(getByText(props.cta.disagree)).toBeDefined();
  });

  it('should set visibility to false and set the cookie when agree button is clicked', () => {
    const { getByText, container } = render(<Component {...props} />);
    jest.runOnlyPendingTimers();
    expect(container.childNodes.length).toEqual(1);
    fireEvent.click(getByText(props.cta.agree));
    expect(set).toHaveBeenCalledWith('allowCookies', true);
    expect(container.childNodes.length).toEqual(0);
  });

  it('should set visibility to false and set the cookie when disagree button is clicked', () => {
    const { getByText, container } = render(<Component {...props} />);
    jest.runOnlyPendingTimers();
    expect(container.childNodes.length).toEqual(1);
    fireEvent.click(getByText(props.cta.disagree));
    expect(set).toHaveBeenCalledWith('allowCookies', false);
    expect(container.childNodes.length).toEqual(0);
  });
});
