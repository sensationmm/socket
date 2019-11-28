import { MutationFunction } from '@apollo/react-common';
import { graphql } from '@apollo/react-hoc';
import classNames from 'classnames';
import gql from 'graphql-tag';
import * as React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import { Mail, Phone, Pigeon, Post, Sms } from '@somo/pda-components-icons/src';
import MultiSelect from '@somo/pda-components-multi-select/src/multi-select.component';
import SaveCancel from '@somo/pda-components-save-cancel/src';
import SVG from '@somo/pda-components-svg/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';
import { withAuthentication } from '@somo/pda-pages-login/src';
import { withForm } from '@somo/pda-redux-form/src';
import { IFormState } from '@somo/pda-redux-form/src/reducers';
import formUtils from '@somo/pda-utils-form/src';

import { GET_USER_QUERY } from '../../account.component';
import * as styles from './contact-preferences.module.css';

interface IMutationVars {
  userId: string;
  contactId?: string;
  preferences: EON.IContactPreferences;
}

interface IMutationResponse {
  __typename: string;
  updateContactPreferences: EON.IUserData;
}

interface IContactPreferencesProps extends WithTranslation {
  form: IFormState;
  values: EON.IContactPreferences;
  editMode: boolean;
  onCancelEdit: () => void;
  contactId: string;
  userId: string;
  mutate: MutationFunction<IMutationResponse, IMutationVars>;
}

interface IContactPreferencesState {
  confirm: boolean;
}

const prefOptions = {
  email: { label: 'Email', icon: Mail },
  sms: { label: 'SMS', icon: Sms },
  phone: { label: 'Phone', icon: Phone },
  post: { label: 'Post', icon: Post },
  carrierpigeon: { label: 'Carrier Pigeon', icon: Pigeon },
};

class ContactPreferences extends React.Component<IContactPreferencesProps, IContactPreferencesState> {
  constructor(props) {
    super(props);

    this.state = {
      confirm: false,
    };
  }

  public componentDidMount() {
    const existingValues = this.props.values;
    const selectedPrefs = Object.keys(existingValues)
      .filter((key) => typeof existingValues[key] === 'boolean' && existingValues[key])
      .map((key) => {
        return key;
      });

    formUtils.initFormState({
      preferences: selectedPrefs,
    });
  }

  public componentWillUnmount() {
    formUtils.clearFormState();
  }

  public clearSelection = () => {
    const values = this.props.values;

    const existingValues = Object.keys(values).filter((key) => typeof values[key] === 'boolean' && values[key]);

    if (existingValues.length > 0) {
      this.props.onCancelEdit();
      formUtils.updateValue('preferences', existingValues);
    } else {
      formUtils.updateValue('preferences', []);
    }
  };

  public saveSelection = (config) => {
    const {
      form,
      values: { contactId },
      userId,
    } = this.props;
    const updateContactPrefs = this.props.mutate;
    const { preferences } = form.values;

    const isValid = formUtils.validateForm(config);

    if (isValid) {
      const newPrefs = {} as EON.IContactPreferences;
      preferences.forEach((pref) => {
        newPrefs[pref] = true;
      });

      updateContactPrefs({
        variables: {
          userId,
          contactId,
          preferences: newPrefs,
        },
        optimisticResponse: {
          __typename: 'UpdateContactPreferences',
          updateContactPreferences: {
            __typename: 'User',
            id: userId,
            contactPreferences: {
              __typename: 'ContactPreferences',
              contactId,
              email: newPrefs.email === true,
              sms: newPrefs.sms === true,
              post: newPrefs.post === true,
              phone: newPrefs.phone === true,
              carrierpigeon: newPrefs.carrierpigeon === true,
            },
          },
        },
        update: (cache, { data }) => {
          const res: EON.IUserResponse | null = cache.readQuery({ query: GET_USER_QUERY, variables: { id: userId } });

          if (!res) {
            return;
          }

          const userData = res.user;

          userData.contactPreferences = {
            ...userData.contactPreferences,
            ...(data ? data.updateContactPreferences.contactPreferences : null),
          };

          cache.writeQuery({
            query: GET_USER_QUERY,
            variables: { id: userId },
            data: {
              user: userData,
            },
          });
        },
      }).finally(() => {
        this.setState({ confirm: true }, this.props.onCancelEdit);
      });
    }
  };

  public render() {
    const { confirm } = this.state;
    const { editMode, form, t } = this.props;
    const reduxValues = form.values;
    const existingValues = this.props.values;

    const hasExisting =
      Object.keys(existingValues).filter((key) => typeof existingValues[key] === 'boolean' && existingValues[key])
        .length > 0;

    const config = [
      {
        id: 'input-multi-select',
        stateKey: 'preferences',
        component: MultiSelect,
        label: t('site.account.contactPreferences.initial.label'),
        items: Object.keys(prefOptions).map((optionKey) => {
          return {
            ...prefOptions[optionKey],
            value: optionKey,
          };
        }),
        value: reduxValues.preferences,
        validationFunction: 'validateRequired',
      },
    ];

    return (
      <div>
        {editMode || !hasExisting ? (
          <div data-test="contact-preferences-initial">
            <Text className={styles.heading} element="h3" type={TextStyles.h3}>
              {t('site.account.contactPreferences.initial.heading')}
            </Text>

            <Text className={styles.text} element="p" type={TextStyles.supportCopy} color={ColorStyles.tertiary}>
              {t('site.account.contactPreferences.initial.text')}
            </Text>

            {formUtils.renderForm(config)}

            <SaveCancel
              actionPrimary={() => this.saveSelection(config)}
              actionSecondary={this.clearSelection}
              disabled={reduxValues.preferences && reduxValues.preferences.length === 0}
            />
          </div>
        ) : (
          <div data-test="contact-preferences-existing">
            {!confirm ? (
              <>
                <Text className={styles.heading} element="h3" type={TextStyles.h3}>
                  {t('site.account.contactPreferences.saved.heading')}
                </Text>

                <Text className={styles.text} element="p" type={TextStyles.supportCopy} color={ColorStyles.tertiary}>
                  {t('site.account.contactPreferences.saved.text')}
                </Text>
              </>
            ) : (
              <Text className={classNames(styles.heading, styles.confirm)} element="h3" type={TextStyles.h3}>
                {t('site.account.contactPreferences.confirm.heading')}
              </Text>
            )}

            <div className={styles.prefOptions}>
              {Object.keys(existingValues).map((key, count) => {
                const prefOption = prefOptions[key];

                if (!prefOption) {
                  return;
                }

                return existingValues[key] ? (
                  <div className={styles.prefOption} key={`pref-${count}`}>
                    <SVG children={prefOption.icon} size={60} />
                    <Text className={styles.prefOptionLabel} type={TextStyles.caption} color={ColorStyles.quinary}>
                      {prefOption.label}
                    </Text>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const UPDATE_CONTACT_PREFERENCES = gql`
  mutation UpdateContactPreferences($userId: ID!, $contactId: ID!, $preferences: ContactPreferencesInput!) {
    updateContactPreferences(userId: $userId, contactId: $contactId, preferences: $preferences) {
      contactPreferences {
        contactId
        email
        phone
        sms
        post
        carrierpigeon
      }
    }
  }
`;

export const RawComponent = ContactPreferences;

export default graphql(UPDATE_CONTACT_PREFERENCES)(withAuthentication(withForm(withTranslation()(ContactPreferences))));
