import { shallow } from 'enzyme';
import * as React from 'react';

import About from '.';

describe('@somo/pda-pages-about', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      i18n: {
        about: {
          hero: {
            title: 'Hey there, we’re Socket!',
          },
          energyMarket: {
            title: 'We were fed up with the old-fashioned energy market. ',
            content: [
              'The same old spiel, the cheap deal to get you in and the price hike when you’re in no mood to move.',
              'Here’s the antidote.',
              "Welcome to Socket. We're about to make all the boring stuff about energy a tiny bit less, well, dull.",
              'We’re a bunch of renegades who were super sick of nightmare call centres, weird bills that are hard to decipher, even weirder payment terms and no real people you can turn to.',
              'What other stuff do you buy where you don’t know how much you’ll pay? Why should energy be different?',
              'The big wigs at E.ON (yes, that MAHOOSIVE energy company) heard us banging on about everything we thought was wrong with energy – and put their money where our mouth is (crikey, serious business now…). So, we set to work building an energy company for the future, and that’s how Socket was born.',
              'Sound good? Of course it does.\nIt’s how energy should work.',
            ],
          },
          goodBunch: {
            title: 'A really good bunch.',
            content: [
              {
                text:
                  'Lots of the stuff about energy means people work harder, not smarter. That’s the stuff you, dear customer, sees – but also the nitty gritty behind the scenes. NO MORE WE CRY!',
              },
              {
                text: 'There are some simple rules we live by:',
                list: [
                  "If it's complicated, make it simple.",
                  'If it’s difficult, find an easier way.',
                  'If we can help, we all muck in.',
                  'And all share responsibility (the blame game is something we don’t like to play)',
                ],
              },
              {
                text: "It's how the world should work, and it means the culture at Socket is all about lovely people!",
              },
            ],
            cta: 'Join us',
          },
          realPeople: {
            title: "Wow, we're real actual people not stock images!",
            content: [
              {
                text:
                  'Our boffins getting their heads together to plan how we build your next idea - keep your eyes peeled for updates',
                image: 'office',
              },
              {
                text:
                  'Our boffins getting their heads together to plan how we build your next idea - keep your eyes peeled for updates',
                image: 'reading',
              },
            ],
            cta: 'Follow us',
          },
        },
        footer: {
          title: 'Our smart technology needs a smart meter.',
          subTitle: "Check you're on the latest smart meter and start taking control your energy.",
          copyright: '2019 © Socket Energy. All rights reserved.',
        },
      },
      imagery: [
        {
          node: { name: 'office', publicURL: 'https://picsum.photos/id/950/400/300' },
        },
        {
          node: { name: 'reading', publicURL: 'https://picsum.photos/id/951/400/300' },
        },
      ],
    };
    component = shallow(<About {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});
