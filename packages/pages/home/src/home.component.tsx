import * as React from 'react';

// @ts-ignore
import * as styles from './home.module.css';

interface IHomepageProps {
  i18n: EON.IWebAppTranslations['homepage'];
}

const Homepage: React.FC<IHomepageProps> = ({ i18n }) => {
  const { hero } = i18n;

  return <h1>{hero.title}</h1>;
};

export default Homepage;
