import * as React from 'react';

// import Image from '@somo/pda-components-image/src';
import List from '@somo/pda-components-list/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

// -- Function to add unique key to props
// const propsWithUniqueKey = (props, key) => Object.assign(props || {}, { key });

const listContent = (content) => content.map((listItem) => listItem.children[0].children[0].value);

const htmlSerializer = (content) => {
  //   content.children.forEach((comp) => {
  //     return componentFormatter(comp);
  //   });
  return content.children.map((comp) => componentFormatter(comp));
};

// -- HTML Serializer
const componentFormatter = (component) => {
  //   let props = {};

  switch (component.type) {
    case 'heading2': // Heading 2
      return (
        <Text element="h2" type={TextStyles.h2} color={ColorStyles.primary}>
          {component.children[0].value}
        </Text>
      );

    case 'heading3': // Heading 2
      return (
        <Text element="h3" type={TextStyles.h3} color={ColorStyles.primary}>
          {component.children[0].value}
        </Text>
      );

    // case Elements.heading4: // Heading 4
    //   return React.createElement('h4', propsWithUniqueKey(props, key), children);

    // case Elements.heading5: // Heading 5
    //   return React.createElement('h5', propsWithUniqueKey(props, key), children);

    // case Elements.heading6: // Heading 6
    //   return React.createElement('h6', propsWithUniqueKey(props, key), children);

    case 'paragraph': // Paragraph
      return (
        <Text element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
          {component.children[0].value}
        </Text>
      );

    // case Elements.preformatted: // Preformatted
    //   return React.createElement('pre', propsWithUniqueKey(props, key), children);

    // case Elements.strong: // Strong
    //   return React.createElement('strong', propsWithUniqueKey(props, key), children);

    // case Elements.em: // Emphasis
    //   return React.createElement('em', propsWithUniqueKey(props, key), children);

    // case Elements.listItem: // Unordered List Item
    //   return React.createElement('li', propsWithUniqueKey(props, key), children);

    // case Elements.oListItem: // Ordered List Item
    //   return React.createElement('li', propsWithUniqueKey(props, key), children);

    case 'list': // Unordered List
      return <List listContent={listContent(component.children)} textColor={ColorStyles.tertiary} />;

    // case Elements.oList: // Ordered List
    //   return React.createElement('ol', propsWithUniqueKey(props, key), children);

    // case Elements.image: // Image
    //   const linkUrl = element.linkTo ? element.linkTo.url || linkResolver(element.linkTo) : null;
    //   const linkTarget = element.linkTo && element.linkTo.target ? { target: element.linkTo.target } : {};
    //   const linkRel = linkTarget.target ? { rel: 'noopener' } : {};
    //   const img = <Image alt={element.alt || ''} src={element.url} isLazy={true} />;

    //   return React.createElement(
    //     'p',
    //     propsWithUniqueKey({ className: [element.label || '', 'block-img'].join(' ') }, key),
    //     linkUrl ? React.createElement('a', Object.assign({ href: linkUrl }, linkTarget, linkRel), img) : img,
    //   );

    // case Elements.embed: // Embed
    //   props = Object.assign(
    //     {
    //       'data-oembed': element.oembed.embed_url,
    //       'data-oembed-type': element.oembed.type,
    //       'data-oembed-provider': element.oembed.provider_name,
    //     },
    //     element.label ? { className: element.label } : {},
    //   );
    //   const embedHtml = React.createElement('div', { dangerouslySetInnerHTML: { __html: element.oembed.html } });

    //   return React.createElement('div', propsWithUniqueKey(props, key), embedHtml);

    // case Elements.hyperlink: // Image
    //   const targetAttr = element.data.target ? { target: element.data.target } : {};
    //   const relAttr = element.data.target ? { rel: 'noopener' } : {};
    //   props = Object.assign(
    //     {
    //       href: element.data.url || linkResolver(element.data),
    //     },
    //     targetAttr,
    //     relAttr,
    //   );

    //   return React.createElement('a', propsWithUniqueKey(props, key), children);

    // case Elements.label: // Label
    //   props = element.data ? Object.assign({}, { className: element.data.label }) : {};

    //   return React.createElement('span', propsWithUniqueKey(props, key), children);

    // case Elements.span: // Span
    //   if (content) {
    //     return content.split('\n').reduce((acc, p) => {
    //       if (acc.length === 0) {
    //         return [p];
    //       } else {
    //         const brIndex = (acc.length + 1) / 2 - 1;
    //         const br = React.createElement('br', propsWithUniqueKey({}, brIndex));

    //         return acc.concat([br, p]);
    //       }
    //     }, []);
    //   } else {
    //     return null;
    //   }

    default:
      // Always include a default that returns null
      return null;
  }
};

export default htmlSerializer;
