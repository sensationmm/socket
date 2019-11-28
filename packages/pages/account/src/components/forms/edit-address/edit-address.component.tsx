import { useMutation } from '@apollo/react-hooks';
import i18n from '@somo/pda-utils-i18n/src';
import gql from 'graphql-tag';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { IFormState } from '@somo/pda-redux-form/src/reducers';
import formUtils from '@somo/pda-utils-form/src';
import { computeAddress, IAddress } from '@somo/pda-utils-strings/src';

import { Outline as OutlineBtn, Primary as PrimaryBtn } from '@somo/pda-components-button/src';
import InputText from '@somo/pda-components-input-text/src';
import { withAuthentication } from '@somo/pda-pages-login/src';
import { withForm } from '@somo/pda-redux-form/src';
import { GET_USER_QUERY } from '../../../account.component';

import * as styles from './edit-address.module.css';

const FIELDS = {
  addressLine1: 'address1',
  addressLine2: 'address2',
  city: 'address4',
  county: 'address5',
  postcode: 'postcode',
};

export interface IFormValues {
  address1: string;
  address2?: string;
  address4?: string;
  address5?: string;
  postcode: string;
}

export const pageTitle = i18n.t('site.account.editAddress.title');

const getFieldsConfig = (values, labels) => [
  {
    id: FIELDS.addressLine1,
    stateKey: FIELDS.addressLine1,
    component: InputText,
    label: labels[FIELDS.addressLine1],
    value: values[FIELDS.addressLine1],
    validationFunction: ['validateRequired'],
  },
  {
    id: FIELDS.addressLine2,
    stateKey: FIELDS.addressLine2,
    component: InputText,
    label: labels[FIELDS.addressLine2],
    value: values[FIELDS.addressLine2],
  },
  {
    id: FIELDS.city,
    stateKey: FIELDS.city,
    component: InputText,
    label: labels[FIELDS.city],
    value: values[FIELDS.city],
  },
  {
    id: FIELDS.county,
    stateKey: FIELDS.county,
    component: InputText,
    label: labels[FIELDS.county],
    value: values[FIELDS.county],
  },
  {
    id: FIELDS.postcode,
    stateKey: FIELDS.postcode,
    component: InputText,
    label: labels[FIELDS.postcode],
    value: values[FIELDS.postcode],
    validationFunction: ['validateRequired', 'validatePostcode'],
  },
];

const setInitialValues = (initialValues) => ({
  [FIELDS.addressLine1]: initialValues.address1 || '',
  [FIELDS.addressLine2]: initialValues.address2 || '',
  [FIELDS.city]: initialValues.city || '',
  [FIELDS.county]: initialValues.county || '',
  [FIELDS.postcode]: initialValues.postcode || '',
});

export const UPDATE_ADDRESS = gql`
  mutation UpdateAddress($id: ID!, $address: AddressInput!) {
    updateCorrespondenceAddress(id: $id, address: $address) {
      id
      personalDetails {
        correspondenceAddress
        detailedCorrespondenceAddress {
          address1
          address2
          address4
          address5
          postcode
        }
      }
    }
  }
`;

interface IEditAddressProps {
  initialValues: IFormValues;
  form: IFormState;
  userId: string;
  onClose: () => void;
}

interface IMutationVars {
  id: string;
  address: IFormValues;
}

interface IMutationResponse {
  __typename: string;
  updateCorrespondenceAddress: EON.IUserData;
}

export const EditAddress: React.FC<IEditAddressProps> = ({ initialValues, form, userId, onClose }) => {
  const [t] = useTranslation();
  const [isSubmitDisabled, setSubmitDisabled] = React.useState<boolean>(false);
  const [updateAddress] = useMutation<IMutationResponse, IMutationVars>(UPDATE_ADDRESS);

  React.useEffect(() => {
    formUtils.initFormState(setInitialValues(initialValues));

    return () => {
      formUtils.clearFormState();
    };
  }, []);

  const labels = {
    [FIELDS.addressLine1]: t('site.account.editAddress.addressLineOneLabel'),
    [FIELDS.addressLine2]: t('site.account.editAddress.addressLineTwoLabel'),
    [FIELDS.city]: t('site.account.editAddress.cityLabel'),
    [FIELDS.county]: t('site.account.editAddress.countyLabel'),
    [FIELDS.postcode]: t('site.account.editAddress.postcodeLabel'),
  };

  const fieldsConfig = getFieldsConfig(form.values, labels);

  const onSubmit = () => {
    const isValid = formUtils.validateForm(fieldsConfig);

    if (isValid) {
      setSubmitDisabled(true);

      updateAddress({
        variables: {
          id: userId,
          address: form.values as IFormValues,
        },
        optimisticResponse: {
          __typename: 'UpdateAddress',
          updateCorrespondenceAddress: {
            __typename: 'User',
            id: userId,
            personalDetails: {
              __typename: 'PersonalDetails',
              correspondenceAddress: computeAddress(form.values as IAddress),
              detailedCorrespondenceAddress: {
                __typename: 'Address',
                ...(form.values as IFormValues),
              },
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

          // this might be an apollo client issue
          // if you will try to write the query with a new data object, apollo is complaining
          // that's why we mutate cache data
          userData.user.personalDetails = {
            ...userData.user.personalDetails,
            ...(data ? data.updateCorrespondenceAddress.personalDetails : {}),
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
    <div className={styles.formWrapper}>
      <div className={styles.fieldsWrapper}>{formUtils.renderForm(fieldsConfig)}</div>
      <div className={styles.ctaWrapper}>
        <OutlineBtn size="medium" onClick={onClose}>
          {t('site.account.editAddress.cta.cancelText')}
        </OutlineBtn>
        <PrimaryBtn size="medium" disabled={isSubmitDisabled} onClick={onSubmit}>
          {t('site.account.editAddress.cta.saveText')}
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default withAuthentication(withForm(EditAddress));
