import { shallow } from 'enzyme';
import * as React from 'react';

import { Secondary as SecondaryBtn } from '@somo/pda-components-button/src';
import Component from '.';

describe('@somo/pda-components-people component', () => {
  const props = {
    title: 'We are real people',
    list: [
      {
        text: 'Our boffins getting their heads together to plan how we build your next idea.',
        image: 'https://picsum.photos/id/950/400/300',
      },
      {
        text: 'Keep your eyes peeled for updates.',
        image: 'https://picsum.photos/id/951/400/300',
      },
    ],
    cta: 'Follow us',
  };

  it('should render a title', () => {
    const wrapper = shallow(<Component {...props} />);
    expect(
      wrapper
        .find('Text')
        .childAt(0)
        .text(),
    ).toEqual(props.title);
  });

  it('should render a cta button', () => {
    const wrapper = shallow(<Component {...props} />);
    expect(
      wrapper
        .find(SecondaryBtn)
        .childAt(0)
        .text(),
    ).toEqual(props.cta);
  });

  it('should render a list of photo cards', () => {
    const wrapper = shallow(<Component {...props} />);
    const list = wrapper.find('PhotoCard');
    expect(list.length).toEqual(props.list.length);

    for (let i = 0; i < props.list.length; i += 1) {
      expect(list.at(i).props()).toMatchObject({
        text: props.list[i].text,
        image: props.list[i].image,
      });
    }
  });
});
