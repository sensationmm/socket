import { mount } from 'enzyme';
import * as React from 'react';

import Portal from './index';

describe('Portal', () => {
  let portalRoot;
  beforeAll(() => {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal-root');
    document.documentElement.appendChild(portalRoot);
  });

  afterEach(() => {
    for (const child of portalRoot.children) {
      portalRoot.removeChild(child);
    }
  });

  it('injects a component into the portalRoot component', () => {
    mount(
      <Portal>
        <div />
      </Portal>,
    );
    expect(portalRoot.children.length).toEqual(1);
  });

  it('injects multiple a component into the portalRoot component', () => {
    const portal1 = mount(
      <Portal>
        <div />
      </Portal>,
    );
    const portal2 = mount(
      <Portal>
        <div />
      </Portal>,
    );
    expect(portalRoot.children.length).toEqual(2);
    portal1.unmount();
    portal2.unmount();
  });

  it('injects a component into a custom rootElement as selector', () => {
    const div = document.createElement('div');
    div.classList.add('foo');
    document.documentElement.appendChild(div);
    const portal = mount(
      <Portal rootElem={'.foo'}>
        <div />
      </Portal>,
    );
    const instance = portal.instance() as Portal;
    expect(instance.container).toEqual(div);
  });

  it('injects a component into a custom rootElement as element', () => {
    const div = document.createElement('div');
    div.classList.add('foo');
    document.documentElement.appendChild(div);
    const portal = mount(
      <Portal rootElem={div}>
        <div />
      </Portal>,
    );
    const instance = portal.instance() as Portal;
    expect(instance.container).toEqual(div);
  });

  it('injects children into the portal component', () => {
    const portal = mount(
      <Portal>
        <div className="foo" />
        <div className="bar" />
      </Portal>,
    );
    expect(portal.find('.foo').length).toEqual(1);
    expect(portal.find('.bar').length).toEqual(1);
  });

  it('should remove element from container on componentWillUnmount', (done) => {
    const portal = mount(
      <Portal>
        <div />
      </Portal>,
    );
    const instance = portal.instance();
    expect(portalRoot.children.length).toEqual(1);
    process.nextTick(() => {
      if (instance.componentWillUnmount) {
        instance.componentWillUnmount();
        expect(portalRoot.children.length).toEqual(0);
        done();
      } else {
        done.fail();
      }
    });
  });
});
