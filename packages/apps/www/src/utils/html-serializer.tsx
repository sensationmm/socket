import * as React from 'react';

import Image from '@somo/pda-components-image/src';
import List from '@somo/pda-components-list/src';
import Text, { ColorStyles, TextStyles } from '@somo/pda-components-text/src';

const listContent = (content) => content.map((listItem) => listItem.children[0].children[0].value);

const htmlSerializer = (content) => {
  return content.children.map((comp) => componentFormatter(comp));
};

// -- HTML Serializer
const componentFormatter = (component) => {
  //   let props = {};

  switch (component.type) {
    case 'heading': // Heading 2
      return (
        <Text element="h2" type={TextStyles.h2} color={ColorStyles.primary}>
          {component.children[0].value}
        </Text>
      );

    case 'paragraph': // Paragraph
      if (component.children[0].type === 'text') {
        return (
          <Text element="p" type={TextStyles.body} color={ColorStyles.tertiary}>
            {component.children[0].value}
          </Text>
        );
      } else if (component.children[0].type === 'image') {
        return <Image alt={component.children[0].alt || ''} src={`static${component.children[0].url}`} isLazy={true} />;
      }

    case 'list': // Unordered List
      return <List listContent={listContent(component.children)} textColor={ColorStyles.tertiary} />;

    default:
      // Always include a default that returns null
      return null;
  }
};

export default htmlSerializer;
