import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Text, { TextStyles } from './index';
import * as baseStyles from './text.module.css';
import * as styles from './text.stories.module.css';

const elements = ['span', 'p', 'h1', 'h2', 'h3'];
const types = [
  'h1',
  'h2',
  'h3',
  'body',
  'bodyFixed',
  'segmentCopy',
  'segmentCopyFixed',
  'caption',
  'supportCopy',
  'cookieTitle',
  'cookieBody',
];

const color = ['primary', 'secondary', 'tertiary', 'quaternary'];

const defaultText = `Take control. Own your energy.`;

storiesOf('Components|text', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div>
      <Text
        element={select('element', elements, 'h1')}
        type={select('type', types, 'h1')}
        color={select('color', color, 'primary')}
        className={text('className', '')}
        children={text('children', defaultText)}
        isCMSContent={boolean('isCMSContent', false)}
      />
    </div>
  ));

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
                  type={Object.keys(baseStyles)[0] as keyof typeof TextStyles}
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
