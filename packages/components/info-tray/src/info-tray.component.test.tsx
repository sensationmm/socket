import { fireEvent, render } from '@testing-library/react';
import { mount } from 'enzyme';
import React from 'react';
import { Transition } from 'react-transition-group';

import InfoTray from './info-tray.component';
import { IInfoTrayProps } from './info-tray.component';

interface ITransitionProps {
  onEntering: (node: HTMLDivElement) => void;
  onEntered: () => void;
  onExit: (node: HTMLDivElement) => void;
  onExiting: () => void;
  onExited: () => void;
  in: boolean;
  children: () => any;
}

jest.mock('react-transition-group', () => ({
  Transition: jest.fn((props: ITransitionProps) => props.children()),
}));

describe('InfoTray', () => {
  let globalEventsMap;
  const renderComponent = (props: IInfoTrayProps) => render(<InfoTray {...props}>{props.children}</InfoTray>);

  const defaultProps = {
    openedText: 'CLOSE',
    closedText: 'OPEN',
    children: 'content',
  };

  beforeEach(() => {
    globalEventsMap = {};
    window.addEventListener = jest.fn().mockImplementation((event, cb) => {
      globalEventsMap[event] = cb;
    });
  });

  it('hides content when isOpen prop is false', () => {
    const { getByText } = renderComponent({ ...defaultProps });
    const context = expect.any(Object);
    expect(Transition).toHaveBeenCalledWith(expect.objectContaining({ in: false }), context);
    getByText(/OPEN/i);
  });

  it('shows content when isOpen prop is true', () => {
    const { getByText } = renderComponent({ ...defaultProps, open: true });
    const context = expect.any(Object);
    expect(Transition).toHaveBeenCalledWith(expect.objectContaining({ in: true }), context);
    getByText(/CLOSE/i);
  });

  it('sets the in prop when the button is clicked', () => {
    const { getByText } = renderComponent({ ...defaultProps, open: false });
    const context = expect.any(Object);

    expect(Transition).toHaveBeenCalledWith(expect.objectContaining({ in: false }), context);

    fireEvent.click(getByText(/OPEN/i));
    expect(Transition).toHaveBeenCalledWith(expect.objectContaining({ in: true }), context);
    getByText(/CLOSE/i);
  });

  it('sets height on transition entering', () => {
    const wrapper = mount(<InfoTray {...defaultProps} />);
    (wrapper.find(Transition).props() as ITransitionProps).onEntering(document.createElement('div'));
    wrapper.update();
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().style,
    ).toMatchObject({
      height: '0px',
    });
  });

  it('sets null height on transition entered', () => {
    const wrapper = mount(<InfoTray {...defaultProps} open={false} />);
    (wrapper.find(Transition).props() as ITransitionProps).onEntered();
    wrapper.update();
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().style,
    ).toMatchObject({
      height: 'nullpx',
    });
  });

  it('sets height on transition exit', () => {
    const wrapper = mount(<InfoTray {...defaultProps} />);
    (wrapper.find(Transition).props() as ITransitionProps).onExit(document.createElement('div'));
    wrapper.update();
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().style,
    ).toMatchObject({
      height: '0px',
    });
  });

  it('sets height on transition exiting', () => {
    const wrapper = mount(<InfoTray {...defaultProps} />);
    (wrapper.find(Transition).props() as ITransitionProps).onExiting();
    wrapper.update();
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().style,
    ).toMatchObject({
      height: '2px',
    });
  });

  it('sets height on transition exited', () => {
    const wrapper = mount(<InfoTray {...defaultProps} />);
    (wrapper.find(Transition).props() as ITransitionProps).onExited();
    wrapper.update();
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().style,
    ).toMatchObject({
      height: '2px',
    });
  });

  it('sets height on window resize if content is open', () => {
    const wrapper = mount(<InfoTray {...defaultProps} open={true} />);
    globalEventsMap.resize();
    wrapper.update();
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().style,
    ).toMatchObject({
      height: '0px',
    });
  });
});
