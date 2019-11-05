import * as React from 'react';

// @ts-ignore
import SofiaProBold from './assets/SofiaProBold.woff2';
// @ts-ignore
import SofiaProLight from './assets/SofiaProLight.woff2';
// @ts-ignore
import SofiaProRegular from './assets/SofiaProRegular.woff2';
// @ts-ignore
import SofiaProSemiBold from './assets/SofiaProSemiBold.woff2';

const PreLoad: React.FC = () => (
  <>
    <link rel="preload" as="font" href={SofiaProBold} type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" as="font" href={SofiaProLight} type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" as="font" href={SofiaProRegular} type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" as="font" href={SofiaProSemiBold} type="font/woff2" crossOrigin="anonymous" />
  </>
);

export default PreLoad;
