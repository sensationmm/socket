import tokens, { toJSON } from '@somo/pda-utils-tokens/src';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

const { customProperties, customMedia } = toJSON(tokens);

// @ts-ignore
import * as styles from './tokens.module.css';

const Preview = (props: {
  title: string;
  prefix: string;
  properties: object;
  render: (props: { value: string | number }) => React.ReactChild;
}) => (
  <section style={{ marginBottom: '4%' }}>
    <h1>{props.title}</h1>
    <table>
      <thead>
        <tr>
          <th>Preview</th>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.properties)
          .filter((k) => k.startsWith(props.prefix))
          .map((prop) => (
            <tr>
              <td>{props.render({ value: props.properties[prop] })}</td>
              <td>{prop}</td>
              <td>{props.properties[prop]}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </section>
);

const PreviewColor = ({ value }) => (
  <div style={{ width: '20px', height: '20px', background: value, borderRadius: '50%' }} />
);
const PreviewEmpty = () => <div />;
const PreviewSpacing = ({ value }) => (
  <div style={{ width: value, height: '20px', background: 'red', borderRadius: '5px' }} />
);
const PreviewWeight = ({ value }) => <span style={{ fontWeight: value }}>{value}</span>;
const PreviewSize = ({ value }) => <span style={{ fontSize: value }}>{value}</span>;

storiesOf('Kitchen Sink|Tokens', module).add('Default', () => (
  <div style={{ padding: '4%', width: '100vw' }} className={styles.table}>
    <Preview title={'Colors'} prefix={'--color-'} properties={customProperties} render={PreviewColor} />
    <Preview title={'Spacing'} prefix={'--spacing-'} properties={customProperties} render={PreviewSpacing} />
    <Preview title={'Font Weight'} prefix={'--font-weight-'} properties={customProperties} render={PreviewWeight} />
    <Preview title={'Font Size'} prefix={'--font-size-'} properties={customProperties} render={PreviewSize} />
    <Preview title={'Breakpoints'} prefix={'--breakpoint-'} properties={customProperties} render={PreviewEmpty} />
    <Preview title={'Media Query'} prefix={'--'} properties={customMedia} render={PreviewEmpty} />
  </div>
));
