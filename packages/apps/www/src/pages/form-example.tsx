import * as React from 'react';
import { connect } from 'react-redux';

import { SiteMetadataContext } from '@somo/pda-context-site-metadata/src';
import FormExample from '@somo/pda-pages-form/src';
import { IFormState } from '@somo/pda-redux-form/src/reducers';
import SEO from '../components/seo.component';
import { useSiteMetadata } from '../hooks';

const SEOProps = {
  title: 'Form example',
  description: 'Example form implementation',
  siteLanguage: 'en',
};

interface IFormProps {
  form: IFormState;
}

const Form: React.FC<IFormProps> = ({ form }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <SEO {...SEOProps} />
      <FormExample form={form} />
    </SiteMetadataContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, null)(Form);
