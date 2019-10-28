import { shallow } from 'enzyme';
import * as React from 'react';

import About from '.';

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
      values: {
        name: 'John Smith',
        accountNumber: '123-4568-9876-AB',
        supplyAddress: '84 Boroughbridge Road, Penboyr, Swansea, SA44 1HR',
        email: 'john.smith@somoglobal.com',
        phone: '0750 884 63 45',
        password: '********',
        correspondenceAddress: '65 Shire Oak Road, Scarcewater, Truro, TR2 2RD',
      },
    };
    component = shallow(<About {...props} />);
  });

  it('should render the component successfully', () => {
    expect(component).toBeDefined();
  });
});