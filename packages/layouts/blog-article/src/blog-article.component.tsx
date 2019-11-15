import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import ArticleAuthor from '@somo/pda-components-article-author/src';
import { AvatarSizes } from '@somo/pda-components-avatar/src';
import Emoji from '@somo/pda-components-emoji/src';
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

interface IAuthorProps {
  fullName: string;
  photo?: string;
}

interface IBlogArticleLayoutProps {
  hero: IHeroProps;
}

const BlogArticleLayout: React.FC<IBlogArticleLayoutProps> = ({ hero, children }) => {
  return (
    <AppTemplate>
      <PageSection
        style={hero.heroImage ? PageSectionStyle.Image : PageSectionStyle.PrimaryPattern}
        bgImage={hero.heroImage}
        className={styles.blogArticleHeroWrapper}
      >
        <NavBar menu={HeaderNavigation} />
        <PageHero className={styles.blogArticleHero} heading={hero.title} text={hero.subTitle} cta={hero.cta} />
        <ArticleAuthor
          name={hero.author.fullName}
          avatar={hero.author.photo}
          avatarSize={AvatarSizes.Medium}
          isAvatarResponsive={true}
          date={hero.publicationDate}
        />
      </PageSection>
      <main>
        <Emoji size={24}>{children}</Emoji>
      </main>
      <PageSection style={PageSectionStyle.QuaternaryPattern}>
        <Footer menu={FooterNavigation} />
      </PageSection>
    </AppTemplate>
  );
};

export default BlogArticleLayout;
