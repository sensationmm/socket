import { render } from '@testing-library/react';
import * as React from 'react';

import Content from '.';

const renderComponent = (props) => render(<Content {...props} />);

describe('@somo/pda-pages-content', () => {
  const props = {
    i18n: {
      footer: {
        title: 'Our smart technology needs a smart meter.',
        subTitle: "Check you're on the latest smart meter and start taking control your energy.",
        copyright: '2019 © Socket Energy. All rights reserved.',
      },
    },
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
