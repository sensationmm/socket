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

const BUILD_TIME = new Date().toISOString();

const HTML: React.FC<IHTMLProps> = (props) => (
  <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="socket:buildTime" content={BUILD_TIME} />
      <meta name="google-site-verification" content="7ufgPTa2lk_TZ2wurEmq6PgktRnJFtgrY4LRqdf5Qp4" />
      <PreConnect preConnectUrls={preConnectList} />
      <PreLoad />
      <noscript>Hi Anton and the Trust Pilot team, a very merry Christmas to you all 😁</noscript>
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
