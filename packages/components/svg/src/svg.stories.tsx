import { object, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import SVG from '.';

import * as Icons from '@somo/pda-components-icons';

const alignOptions = [
  'baseline',
  'sub',
  'super',
  'top',
  'text-top',
  'middle',
  'bottom',
  'text-bottom',
  'initial',
  'inherit',
];

const iconOptions = {};

Object.entries(Icons).map((icon) => {
  iconOptions[icon[0]] = icon[1];
});

storiesOf('Components|SVG', module).add('default', () => {
  const iconName = select('btnIcon', Object.keys(iconOptions), 'ArrowLeft');

  return (
    <SVG
      children={iconOptions[iconName]}
      size={text('size', '50px')}
      width={text('width', 'auto')}
      height={text('height', 'auto')}
      className={text('className', '')}
      preserveAspectRatio={text('preserveAspectRatio', 'xMidYMid')}
      fill={text('fill', 'currentColor')}
      verticalAlign={select('verticalAlign', alignOptions, 'middle')}
      styles={object('styles', {})}
    />
  );
});
