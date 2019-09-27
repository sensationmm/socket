import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

interface IProps {
  title?: string;
  desc?: string;
  noIndex?: boolean;
}

const SEO: React.FC<IProps> = ({ title, desc, noIndex = false }) => {
  const { site } = useStaticQuery(query);

  const {
    siteMetadata: { defaultTitle, defaultDescription, siteLanguage },
  } = site;

  const seo = {
    title: defaultTitle,
    description: desc || defaultDescription,
  };

  if (title) {
    seo.title = `${title} - ${defaultTitle}`;
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        {noIndex && <meta name="robots" content="noindex" />}
      </Helmet>
    </>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        defaultTitle
        defaultDescription
        siteLanguage
      }
    }
  }
`;
