import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '@somo/pda-utils-test-support/src/redux-store';
import Content from '.';

const store = createReduxStore();

const renderComponent = (props) =>
  render(
    <Provider store={store}>
      <Content {...props} />
    </Provider>,
  );

describe('@somo/pda-pages-content', () => {
  const props = {
    hero: {
      title: 'Content Page',
    },
    subTitle: 'This is the subtitle',
    body: 'This is a content page',
  };

  it('should render and display the content of the props passed to it', () => {
    const { getByText } = renderComponent(props);
    getByText(props.hero.title);
    getByText(props.subTitle);
    getByText(props.body);
  });
});
