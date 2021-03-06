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

export interface IRegisterProps {
  form: IFormState;
}

export const CHECK_REGISTRATION_QUERY = gql`
  query checkRegistration($username: String, $nickname: String) {
    checkRegistration(username: $username, nickname: $nickname) {
      usernameExists
      nicknameValid {
        status
        message
      }
      newSogUserValid {
        status
        message
        error_code
      }
      newCiamUserValid {
        status
        message
      }
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
          checkRegistration: { usernameExists, nicknameValid, newSogUserValid, newCiamUserValid },
        },
      } = await client.query<EON.IAccountStatusData, IQueryVars>({
        query: CHECK_REGISTRATION_QUERY,
        variables: { username: values['register.username'], nickname: values['register.nickname'] },
      });

      if (usernameExists) {
        formUtils.setFieldError('register.username', t('site.register.errors.usernameExists'), false);
        formUtils.setFormError(t('site.register.loginWarning'));
      } else if (nicknameValid.status === 'nok') {
        formUtils.setFieldError('register.nickname', nicknameValid.message);
      } else if (newCiamUserValid.status === 'Fail') {
        formUtils.setFieldError('register.username', t('site.register.errors.usernameExists'));
      } else if (newSogUserValid.status === 'nok' && newSogUserValid.error_code === 103) {
        formUtils.setFieldError('register.username', t('site.register.errors.usernameExists'));
      } else if (
        !usernameExists &&
        nicknameValid.status === 'ok' &&
        newSogUserValid.status === 'ok' &&
        newCiamUserValid.status === 'Success'
      ) {
        navigate('/registration-success');
      }
    }
  } catch {
    formUtils.setFormError(t('errors.httpGenericContent'));
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
