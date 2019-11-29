import { useMutation } from '@apollo/react-hooks';
import i18n from '@somo/pda-utils-i18n/src';
import gql from 'graphql-tag';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { withAuthentication } from '@somo/pda-pages-login/src';
import { IFormState } from '@somo/pda-redux-form/src/reducers';
import formUtils from '@somo/pda-utils-form/src';

import { Primary as Button } from '@somo/pda-components-button/src';
import InputText from '@somo/pda-components-input-text/src';
import { withForm } from '@somo/pda-redux-form/src';
import { GET_USER_QUERY } from '../../../account.component';

import * as styles from './edit-phone-number.module.css';

export const pageTitle = i18n.t('site.account.editPhone.title');

export const UPDATE_PHONE = gql`
  mutation UpdatePhone($id: ID!, $phone: String!) {
    updatePhone(id: $id, phone: $phone) {
      id
      personalDetails {
        phone
      }
    }
  }
`;

export interface IFormValues {
  phone: string;
}

export interface IEditPhoneNumberProps {
  form: IFormState;
  userId: string;
  initialValues: IFormValues;
  onClose: () => void;
}

interface IMutationVars {
  id: string;
  phone: string;
}

interface IMutationResponse {
  __typename: string;
  updatePhone: EON.IUserData;
}

export const EditPhoneNumber: React.FC<IEditPhoneNumberProps> = ({ initialValues, form, userId, onClose }) => {
  const [t] = useTranslation();
  const [isSubmitDisabled, setSubmitDisabled] = React.useState<boolean>(false);
  const [updatePhone] = useMutation<IMutationResponse, IMutationVars>(UPDATE_PHONE);

  const formFields = [
    {
      id: 'phone',
      stateKey: 'phone',
      component: InputText,
      label: t('site.account.personal.phoneLabel'),
      value: form.values.phone,
      validationFunction: ['validatePhone'],
    },
  ];

  React.useEffect(() => {
    formUtils.initFormState({
      phone: initialValues.phone,
    });

    return () => {
      formUtils.clearFormState();
    };
  }, []);

  const onSubmit = () => {
    const isValid = formUtils.validateForm(formFields);

    if (isValid) {
      setSubmitDisabled(true);

      updatePhone({
        variables: {
          id: userId,
          phone: form.values.phone,
        },
        optimisticResponse: {
          __typename: 'UpdatePhone',
          updatePhone: {
            __typename: 'User',
            id: userId,
            personalDetails: {
              __typename: 'PersonalDetails',
              phone: form.values.phone,
            },
          },
        },
        update: (cache, { data }) => {
          const userData: EON.IUserResponse | null = cache.readQuery({
            query: GET_USER_QUERY,
            variables: { id: userId },
          });

          if (!userData) {
            return;
          }

          userData.user.personalDetails = {
            ...userData.user.personalDetails,
            ...(data ? data.updatePhone.personalDetails : null),
          };

          cache.writeQuery({
            query: GET_USER_QUERY,
            variables: { id: userId },
            data: userData,
          });
        },
      }).finally(() => {
        setSubmitDisabled(false);
      });
      onClose();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.fieldsWrapper}>{formUtils.renderForm(formFields)}</div>
      <Button disabled={isSubmitDisabled} onClick={onSubmit}>
        {t('actions.save')}
      </Button>
    </div>
  );
};

export default withAuthentication(withForm(EditPhoneNumber));
