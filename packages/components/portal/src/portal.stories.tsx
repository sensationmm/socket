import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Portal from './index';

const stories = storiesOf('Components|portal', module);

stories.add('default', () => (
  <Portal>
    <div style={{ width: 300, height: 300, background: 'green' }}>This is injected into `#portal-root` div</div>
  </Portal>
));

stories.add('inject portal to specific element via selector', () => {
  const divClass = 'test-div';
  let div = document.querySelector(`.${divClass}`);
  if (!div) {
    div = document.createElement('div');
    div.classList.add(divClass);
    document.documentElement.appendChild(div);
  }

  return (
    <Portal rootElem={`.${divClass}`}>
      <div style={{ width: 300, height: 300, background: 'red' }}>This is injected into `.${divClass}` div</div>
    </Portal>
  );
});

stories.add('inject portal to specific element via element', () => {
  const divClass = 'test-div';
  let div = document.querySelector(`.${divClass}`);
  if (!div) {
    div = document.createElement('div');
    div.classList.add(divClass);
    document.documentElement.appendChild(div);
  }

  return (
    <Portal rootElem={div}>
      <div style={{ width: 300, height: 300, background: 'blue' }}>
        This has been added to `.test-div` element rather than default `#portal-root`
      </div>
    </Portal>
  );
});
