import * as React from 'react';

import { Primary as Button } from '@somo/pda-components-button/src';
import Checkbox from '@somo/pda-components-checkbox/src';
import { Mail, Phone, Sms } from '@somo/pda-components-icons/src';
import InputPassword from '@somo/pda-components-input-password/src';
import InputText from '@somo/pda-components-input-text/src';
import MultiSelect from '@somo/pda-components-multi-select/src';
import PageSection from '@somo/pda-components-page-section/src';
import Radio, { RadioType } from '@somo/pda-components-radio/src';
import RegularLayout from '@somo/pda-layouts-regular/src';
import { IFormState } from '@somo/pda-redux-form/src/reducers';
import formUtils from '@somo/pda-utils-form/src';

interface IFormExampleProps {
  form: IFormState;
}

class FormExample extends React.Component<IFormExampleProps> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    formUtils.initFormState({
      preferences: [],
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordConfirm: '',
      optin: false,
      privacy: false,
      choice: '',
      disabled: '',
    });
  }

  public componentWillUnmount() {
    formUtils.clearFormState();
  }

  public render() {
    const { form } = this.props;

    const { values } = form;

    const config = [
      {
        id: 'input-multi-select',
        stateKey: 'preferences',
        component: MultiSelect,
        label: 'Contact preferences',
        items: [
          { label: 'Email', value: 'email', icon: Mail },
          { label: 'SMS', value: 'sms', icon: Sms },
          { label: 'Phone', value: 'phone', icon: Phone },
        ],
        value: values.preferences,
        note: 'Select how you would like to be contacted',
        validationFunction: 'validateRequired',
      },
      {
        id: 'input-name',
        stateKey: 'name',
        component: InputText,
        label: 'Name',
        value: values.name,
      },
      {
        id: 'input-email',
        stateKey: 'email',
        component: InputText,
        label: 'Email address',
        value: values.email,
        validationFunction: 'validateEmail',
        note: 'Enter a valid email address',
      },
      {
        id: 'input-phone',
        stateKey: 'phone',
        component: InputText,
        label: 'Phone number',
        value: values.phone,
        validationFunction: ['validateNoSpaces', 'validatePhone'],
      },
      {
        id: 'input-password',
        stateKey: 'password',
        component: InputPassword,
        label: 'Password',
        value: values.password,
        validationFunction: ['validateRequired', 'validateNoSpaces', 'validateMinimum'],
        validationParam: [null, null, 8],
        note: 'Must be 8 characters long',
      },
      {
        id: 'input-passwordConfirm',
        stateKey: 'passwordConfirm',
        component: InputPassword,
        label: 'Password confirm',
        value: values.passwordConfirm,
        validationFunction: ['validateRequired', 'validateMatching'],
        validationParam: [null, values.password],
      },
      {
        id: 'input-disabled',
        stateKey: 'disabled',
        component: InputText,
        label: 'Disabled field',
        value: values.disabled,
        placeholder: "You can't type here",
        readOnly: true,
      },
      {
        id: 'input-choice',
        stateKey: 'choice',
        component: Radio,
        type: RadioType.Button,
        items: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'maybe', label: 'Maybe' },
        ],
        label: 'All good?',
        value: values.choice,
        validationFunction: ['validateRequired'],
      },
      {
        id: 'input-optin',
        stateKey: 'optin',
        component: Checkbox,
        label: 'Privacy opt in',
        checked: values.optin,
        validationFunction: 'validateRequired',
      },
    ];

    return (
      <RegularLayout hero={{ title: 'Form Example' }}>
        <PageSection>
          {formUtils.renderForm(config)}

          <Button onClick={() => formUtils.validateForm(config)}>Register</Button>
        </PageSection>
      </RegularLayout>
    );
  }
}

export default FormExample;
