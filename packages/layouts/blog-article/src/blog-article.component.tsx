import { Link } from 'gatsby';
import * as React from 'react';

import AppTemplate from '@somo/pda-components-app-template/src';
import ArticleAuthor from '@somo/pda-components-article-author/src';
import BlogPostCard from '@somo/pda-components-blog-post-card/src';
import { Primary as PrimaryButton } from '@somo/pda-components-button/src';
import FlexRow from '@somo/pda-components-flex-row/src';
import Footer from '@somo/pda-components-footer/src';
import NavBar from '@somo/pda-components-navbar/src';
import PageHero from '@somo/pda-components-page-hero/src';
import PageSection, { PageSectionStyle } from '@somo/pda-components-page-section/src';
import Text, { TextStyles } from '@somo/pda-components-text/src';
import { FooterNavigation, HeaderNavigation } from '@somo/pda-layouts-regular/src/navigation';
import { splitArrayIntoChunksOfN } from '@somo/pda-utils-arrays/src';

import * as styles from './blog-article.module.css';

interface IHeroI18nProps {
  title: string;
  subTitle?: string;
  cta?: string;
  bgImage?: string[];
}

interface IFooterI18nProps {
  title: string;
  subTitle: string;
  copyright: string;
}

interface IAuthorProps {
  name: string;
  avatar?: string;
}

interface IRelatedArticleProps {
  authorAvatar: string;
  authorName: string;
  publicationDate: string;
  title: string;
  shortDescription: string;
  cta: {
    text: string;
    link: string;
  };
}

interface IRelatedArticleI18nProps {
  title: string;
  list: IRelatedArticleProps[];
  cta: {
    text: string;
    link: string;
  };
}

interface IBlogArticleLayoutProps {
  hero: IHeroI18nProps;
  author: IAuthorProps;
  publicationDate: string;
  relatedArticles: IRelatedArticleI18nProps;
  footer: IFooterI18nProps;
}

const BlogArticleLayout: React.FC<IBlogArticleLayoutProps> = ({
  hero,
  author,
  publicationDate,
  relatedArticles,
  footer,
  children,
}) => {
  return (
    <AppTemplate>
      <PageSection
        style={hero.bgImage ? PageSectionStyle.Image : PageSectionStyle.PrimaryPattern}
        bgImage={hero.bgImage}
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
        <ArticleAuthor name={author.name} avatar={author.avatar} isAvatarResponsive={true} date={publicationDate} />
      </PageSection>
      {children}
      <PageSection style={PageSectionStyle.Secondary}>
        <Text className={styles.blogArticleRelatedListTitle} element="p" type={TextStyles.h2}>
          {relatedArticles.title}
        </Text>
        <div className={styles.blogArticleRelatedListWrapper}>
          {splitArrayIntoChunksOfN(relatedArticles.list, 2).map((chunk, count) => (
            <FlexRow key={`chunk-${count}`} className={styles.blogArticleRelatedListRow}>
              {chunk.map((article, index) => (
                <BlogPostCard
                  key={`related-article-${index}`}
                  className={styles.blogArticleRelatedListItem}
                  title={article.title}
                  shortDescription={article.shortDescription}
                  authorAvatar={article.authorAvatar}
                  date={article.publicationDate}
                  authorName={article.authorName}
                  cta={article.cta.text}
                  link={article.cta.link}
                />
              ))}
            </FlexRow>
          ))}
        </div>
        <div className={styles.blogArticleRelatedLinkWrapper}>
          <Link
            className={styles.blogArticleRelatedLink}
            to={relatedArticles.cta.link}
            target="_self"
            title={relatedArticles.cta.text}
          >
            <PrimaryButton>{relatedArticles.cta.text}</PrimaryButton>
          </Link>
        </div>
      </PageSection>
      <PageSection style={PageSectionStyle.PrimaryPattern}>
        <Footer i18n={footer} menu={FooterNavigation} />
      </PageSection>
    </AppTemplate>
  );
};

export default BlogArticleLayout;
