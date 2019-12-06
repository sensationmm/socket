import { useApolloClient } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { navigate } from 'gatsby';
import gql from 'graphql-tag';
import { TFunction } from 'i18next';
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

export const CHECK_REGISTRATION_QUERY = gql`
  query checkRegistration($username: String, $nickname: String) {
    checkRegistration(username: $username, nickname: $nickname) {
      usernameValid
      nicknameValid
    }
  }
`;

interface IQueryVars {
  username: string;
  nickname: string;
}

export const onRegister = async (
  config: IFormConfig[],
  client: ApolloClient<object>,
  values: IFormState['values'],
  t: TFunction,
) => {
  try {
    if (formUtils.validateForm(config)) {
      const {
        data: {
          checkRegistration: { usernameValid, nicknameValid },
        },
      } = await client.query<EON.IAccountStatusData, IQueryVars>({
        query: CHECK_REGISTRATION_QUERY,
        variables: { username: values['register.username'], nickname: values['register.nickname'] },
      });

      if (!usernameValid) {
        formUtils.setFormError(t('site.register.errors.usernameExists'));
      } else if (!nicknameValid) {
        formUtils.setFormError(t('site.register.errors.invalidNickname'));
      } else {
        navigate('/registration-success');
      }
    }
  } catch (error) {
    throw error;
  }
};

const RegisterPage: React.FC<IRegisterProps> = ({ form }) => {
  const [t] = useTranslation();
  const client = useApolloClient();
  const { values } = form;

  const config = [
    {
      id: 'username',
      stateKey: 'register.username',
      component: InputText,
      label: t('site.register.form.username.label'),
      value: form.values['register.username'],
      validationFunction: ['validateRequired', 'validateEmail'],
      note: 'PASS: true@test.com / FAIL: false@test.com',
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

        <Button onClick={() => onRegister(config, client, values, t)}>{t('actions.register')}</Button>
      </PageSection>
    </RegularLayout>
  );
};

export default withForm(RegisterPage);
