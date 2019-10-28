import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import ArticleAuthor from '@somo/pda-components-article-author/src';
import Footer from '@somo/pda-components-footer/src';
import NavBar from '@somo/pda-components-navbar/src';
import PageHero from '@somo/pda-components-page-hero/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import { FooterNavigation, HeaderNavigation } from '@somo/pda-layouts-regular/src/navigation';

import * as styles from './blog-article.module.css';

interface IHeroProps {
  title: string;
  subTitle?: string;
  cta?: string;
  heroImage?: string;
  author: IAuthorProps;
  publicationDate: string;
}

interface IFooterI18nProps {
  title: string;
  subTitle: string;
  copyright: string;
}

interface IAuthorProps {
  fullName: string;
  photo?: string;
}

interface IBlogArticleLayoutProps {
  hero: IHeroProps;
  footer: IFooterI18nProps;
}

const BlogArticleLayout: React.FC<IBlogArticleLayoutProps> = ({ hero, footer, children }) => {
  return (
    <AppTemplate>
      <PageSection
        style={hero.heroImage ? PageSectionStyle.Image : PageSectionStyle.PrimaryPattern}
        bgImage={hero.heroImage}
        className={styles.blogArticleHeroWrapper}
      >
        <NavBar menu={HeaderNavigation} />
        <PageHero
          className={styles.blogArticleHero}
          i18n={{
            heading: hero.title,
            text: hero.subTitle,
            cta: hero.cta,
          }}
        />
        <ArticleAuthor
          name={hero.author.fullName}
          avatar={hero.author.photo}
          isAvatarResponsive={true}
          date={hero.publicationDate}
        />
      </PageSection>
      {children}
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <Footer i18n={footer} menu={FooterNavigation} />
      </PageSection>
    </AppTemplate>
  );
};

export default BlogArticleLayout;
