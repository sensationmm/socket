import * as React from 'react';
import { connect } from 'react-redux';

import FormExample from '@somo/pda-pages-form/src';
import { IFormState } from '@somo/pda-redux-form/src/reducers';

import SEO from '../components/seo.component';

const SEOprops = {
  title: 'Form Example',
  description: 'Example form implementation',
  siteLanguage: 'en_GB',
};

interface IFormProps {
  form: IFormState;
}

const Form: React.FC<IFormProps> = ({ form }) => {
  return (
    <>
      <SEO {...SEOprops} />
      <FormExample form={form} />
    </>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, null)(Form);
