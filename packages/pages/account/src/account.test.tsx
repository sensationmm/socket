import { shallow } from 'enzyme';
import * as React from 'react';

import About from '.';
import PersonalDetails from './personal-details.container';

describe('@somo/pda-pages-about', () => {
  let component;
  let props;

  beforeAll(() => {
    props = {
      i18n: {
        footer: {
          title: 'Our smart technology needs a smart meter.',
          subTitle: "Check you're on the latest smart meter and start taking control your energy.",
          copyright: '2019 © Socket Energy. All rights reserved.',
        },
        account: {
          title: 'Account',
          personal: {
            title: 'Personal Deets',
            subtitle: "That's you!",
            nameLabel: 'Name',
            accountNumberLabel: 'Account Number',
            supplyAddressLabel: 'Supply Address',
            emailLabel: 'Email',
            phoneLabel: 'Phone Number',
            passwordLabel: 'Password',
            correspondenceAddressLabel: 'Correspondence Address',
          },
        },
      },
    };
    component = shallow(<About {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });

  it('should render a personal details section', () => {
    const personalDetails = component.find(PersonalDetails);
    expect(personalDetails.length).toEqual(1);
    expect(personalDetails.props()).toMatchObject({
      i18n: props.i18n.account.personal,
    });
  });
});
