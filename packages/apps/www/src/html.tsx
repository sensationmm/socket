import React from 'react';

import PreConnect from './components/preconnect.component';
import PreLoad from './components/preload.component';
import preConnectList from './utils/pre-connect-list';

interface IHTMLProps {
  htmlAttributes: object;
  headComponents: any[];
  bodyAttributes: object;
  preBodyComponents: any[];
  body: string;
  postBodyComponents: any[];
}

const BUILD_ID = process.env.BUILD_ID || '-';
const BUILD_TIME = new Date().toISOString();

const HTML: React.FC<IHTMLProps> = (props) => (
  <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="socket:buildId" content={BUILD_ID} />
      <meta name="socket:buildTime" content={BUILD_TIME} />
      <PreConnect preConnectUrls={preConnectList} />
      <PreLoad />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <noscript key="noscript" id="gatsby-noscript">
        This app works best with JavaScript enabled.
      </noscript>
      <div key={`portal-root`} id={`portal-root`} />
      <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
      {props.postBodyComponents}
    </body>
  </html>
);

export default HTML;
