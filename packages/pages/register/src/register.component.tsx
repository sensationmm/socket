import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Primary as Button } from '@somo/pda-components-button/src';
import InputText from '@somo/pda-components-input-text/src';
import PageSection from '@somo/pda-components-page-section/src';
import Text from '@somo/pda-components-text/src';
import RegularLayout from '@somo/pda-layouts-regular/src';

import { withForm } from '@somo/pda-redux-form/src';
import { IFormState } from '@somo/pda-redux-form/src/reducers';
import formUtils, { IFormConfig } from '@somo/pda-utils-form/src';

interface IRegisterProps {
  form: IFormState;
}

export const onRegister = (config: IFormConfig[]) => {
  if (formUtils.validateForm(config)) {
    // API calls
  }
};

const RegisterPage: React.FC<IRegisterProps> = ({ form }) => {
  const [t] = useTranslation();

  const config = [
    {
      id: 'username',
      stateKey: 'register.username',
      component: InputText,
      label: t('site.register.form.username.label'),
      value: form.values['register.username'],
      validationFunction: ['validateRequired', 'validateEmail'],
    },
    {
      id: 'nickname',
      stateKey: 'register.nickname',
      component: InputText,
      label: t('site.register.form.nickname.label'),
      value: form.values['register.nickname'],
      validationFunction: ['validateRequired', 'validateNoSpaces', 'validateNoSpecial'],
    },
  ];

  React.useEffect(() => {
    formUtils.initFormState({
      'register.username': '',
      'register.nickname': '',
    });

    return () => {
      formUtils.clearFormState();
    };
  }, []);

  return (
    <RegularLayout hero={t('site.register.hero', { returnObjects: true })}>
      <PageSection>
        <Text element="h2">{t('site.register.body')}</Text>

        {formUtils.renderForm(config)}

        <Button onClick={() => onRegister(config)}>{t('actions.register')}</Button>
      </PageSection>
    </RegularLayout>
  );
};

export default withForm(RegisterPage);
