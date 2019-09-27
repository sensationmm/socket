import * as React from 'react';

interface IPreconnectProps {
  preconnectUrls: string[];
}

const PreConnect: React.FC<IPreconnectProps> = ({ preconnectUrls }) => {
  return (
    <>
      {preconnectUrls.map((preconnect) => (
        <link key={preconnect} rel="preconnect dns-prefetch" href={preconnect} />
      ))}
    </>
  );
};

export default PreConnect;
