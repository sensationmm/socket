import * as React from 'react';

interface IPreConnectProps {
  preConnectUrls: string[];
}

const PreConnect: React.FC<IPreConnectProps> = ({ preConnectUrls }) => {
  return (
    <>
      {preConnectUrls.map((preConnect) => (
        <link key={preConnect} rel="preconnect dns-prefetch" href={preConnect} />
      ))}
    </>
  );
};

export default PreConnect;
