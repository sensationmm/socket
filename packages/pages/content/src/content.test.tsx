import { render } from '@testing-library/react';
import * as React from 'react';

import Content from '.';

const renderComponent = (props) => render(<Content {...props} />);

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
