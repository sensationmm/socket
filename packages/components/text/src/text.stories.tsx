import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Text, { TextStyles } from './index';

// @ts-ignore
import * as styles from './text.stories.module.css';

const types = [
  'mainTitle',
  'cardTitle',
  'menuTitle',
  'cardFocalText',
  'body1',
  'body2',
  'button',
  'caption',
  'overline',
];

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Accusamus fuga iste iure molestias mollitia, necessitatibus nulla sed similique
sit temporibus! Architecto error esse fuga iusto necessitatibus odio
perferendis praesentium suscipit.`;

storiesOf('Components|text', module)
  .addDecorator(withKnobs)
  .add('default', () => <Text className={text('className', '')} children={text('children', defaultText)} />);

storiesOf('Kitchen Sink|Typography', module)
  .addDecorator(withKnobs)
  .add('Preset Styles', () => {
    return (
      <table>
        <tbody>
          {types.map((type) => (
            <tr key={type}>
              <td className={styles.td}>
                <Text
                  className={styles.story}
                  style={{ textAlign: 'right', color: '#9c9c9c' }}
                  element="div"
                  type={TextStyles.caption}
                >
                  {type}
                </Text>
              </td>
              <td className={styles.td}>
                <Text className={styles.story} element="div" type={type as any}>
                  Text Style {type}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  });
