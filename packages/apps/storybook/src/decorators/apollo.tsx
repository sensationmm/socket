import { MockedProvider } from '@apollo/react-testing';
import React from 'react';

export default (mocks) => (story) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {story()}
  </MockedProvider>
);
