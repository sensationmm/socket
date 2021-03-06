import * as React from 'react';
import Helmet from 'react-helmet';

interface IProps {
  title: string;
  description: string;
  siteLanguage: string;
  noIndex?: boolean;
}

const SEO: React.FC<IProps> = ({ title, description, siteLanguage, noIndex = false }) => {
  const fullTitle = `Socket Energy - ${title}`;

  return (
    <>
      <Helmet title={fullTitle}>
        <html lang={siteLanguage} />
        <meta name="description" content={description} />
        {noIndex && <meta name="robots" content="noindex" />}
      </Helmet>
    </>
  );
};

export default SEO;
