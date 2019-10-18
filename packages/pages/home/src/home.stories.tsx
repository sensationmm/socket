import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import HomePage from '@somo/pda-pages-home/src';

const props = {
  i18n: {
    footer: {
      title: 'Our smart technology needs a smart meter.',
      subTitle: "Check you're on the latest smart meter and start taking control your energy.",
      copyright: '2019 © Socket Energy. All rights reserved.',
    },
    homepage: {
      hero: {
        title: 'Take control. Own your energy.',
        subTitle:
          "See real usage, accurate billing at a click and a scroll - in the palm of your hand. It's how energy should work.",
        cta: 'Join the waiting list',
      },
      mainFeatures: {
        content: [
          {
            icon: 'smiley',
            header: 'Smart Only',
            body: "With us you need a smart meter, say bye to the spider in the cupboard - we're digital all the way!",
          },
          {
            icon: 'mobile',
            header: 'Purely Digital',
            body:
              'No tedious call centers or faffing with letters - talk to us quickly and easily through messaging or e-mail.',
          },
          {
            icon: 'crossedfingers',
            header: 'One Simple Tariff',
            body: "You don't have to learn to speak 'energy company'. Just one simple tariff to make it easy.",
          },
        ],
      },
      understandEnergy: {
        title: 'Do you understand your energy?',
        subTitle: 'We make it easy',
        cta: 'Join us',
        image: 'energy-pie',
        list: [
          'Set goals for how much you spend',
          'Regular tips from our boffins to help you save',
          'Easily check and compare your history',
          'See forecasts based on what you use',
        ],
      },
      switchingSteps: {
        header: 'Switching is quick & painless.\nOver in seconds & no form filling.',
        content: {
          step1: {
            header: 'First Step',
            body:
              "Check if you've got the right smart meter to join our club - it takes about 30 seconds and we'll tell you what to do next.",
          },
          step2: {
            header: 'Up Next',
            body:
              "Get a quote from us and if you're happy you're in (trainers, swimwear, hats - it's all good). Then you can make a start on taking part.",
          },
          step3: {
            cta: 'Put me in control',
          },
        },
      },
      companyFeatures: {
        thingsWeDontDo: {
          header: "Things we don't do",
          content: [
            {
              icon: 'wave',
              header: 'Charge Exit Fees',
              body:
                "The freedom to change your mind is much easier when you're not charged an arm and a leg for jumping ship.",
            },
            {
              icon: 'disk',
              header: 'Use Old Tech',
              body:
                'Smart people use smart technology – we waved farewell to floppy disks long ago, smart is the future and so are we.',
            },
            {
              icon: 'torch',
              header: 'Make You Submit Meter Readings',
              body:
                "No more crawling into dark spaces, that spider can get on with its life undisturbed and you don't have to work out what any digits mean.",
            },
            {
              icon: 'poo',
              header: 'Give You Nasty Suprises',
              body:
                "A bill that's more than you expected is bad. We're not about bill shock, we're about giving you fair notice of what you'll pay and when.",
            },
          ],
        },
        thingsWeDoDo: {
          header: 'Things we do, do',
          content: [
            {
              icon: 'heart',
              header: 'Put You Front & Centre',
              body:
                "It's all about you baby! You know you the most, and we want you to love us - so tell us where you want to go.",
            },
            {
              icon: 'moneybag',
              header: 'Reward our Community',
              body:
                "And we're not talking useless vouchers or a free coffee at 10.36am every Tuesday. Cool rewards for the stuff you love.",
            },
            {
              icon: 'comment',
              header: 'Make it easy for you to talk to us',
              body:
                "And we're not talking useless vouchers or a free coffee at 10.36am every Tuesday. Cool rewards for the stuff you love.",
            },
            {
              icon: 'earth',
              header: 'Put You Front & Centre',
              body:
                "We've only got one planet, let's do Dave Attenborough proud! We're as sustainable as possible, and you can help us get better.",
            },
          ],
        },
      },
      goodBunch: {
        title: 'A really good bunch.',
        body:
          'Help us make our community work. Together, we can make our dream of an energy company that puts you in control a reality (and prove the folks who said we were dreaming too big wrong).',
        cta: 'Join us',
      },
    },
  },
  imagery: [
    {
      node: { name: 'energy-pie', publicURL: '/static/energy-pie-0d0ecc3fa9919bd77c050efd743dde01.png' },
    },
  ],
};

storiesOf('Pages|home', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <HomePage {...props} />;
  });
