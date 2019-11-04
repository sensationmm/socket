import * as React from 'react';

import { IFormState } from '@somo/pda-redux-form/src/reducers';
import formUtils from '@somo/pda-utils-form/src';

import PageSection from '@somo/pda-components-page-section/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

import { Primary as Button } from '@somo/pda-components-button/src';
import Checkbox from '@somo/pda-components-checkbox/src';
import InputPassword from '@somo/pda-components-input-password/src';
import InputText from '@somo/pda-components-input-text/src';

interface IFormExampleProps {
  i18n: Pick<EON.IWebAppTranslations['site'], 'footer'>;
  form: IFormState;
}

class FormExample extends React.Component<IFormExampleProps> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    formUtils.initFormState({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      optin: false,
      privacy: false,
    });
  }

  public componentWillUnmount() {
    formUtils.clearFormState();
  }

  public render() {
    const {
      i18n: { footer },
      form,
    } = this.props;

    const { values } = form;

    const config = [
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
        validationFunction: ['validateRequired', 'validateEmail'],
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
        id: 'input-optin',
        stateKey: 'optin',
        component: Checkbox,
        label: 'Privacy opt in',
        checked: values.optin,
        validationFunction: 'validateRequired',
      },
    ];

    return (
      <RegularLayout hero={{ title: 'Form Example' }} footer={footer}>
        <PageSection>
          {formUtils.renderForm(config)}

          <Button onClick={() => formUtils.validateForm(config)}>Register</Button>
        </PageSection>
      </RegularLayout>
    );
  }
}

export default FormExample;
