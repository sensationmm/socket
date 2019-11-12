import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import * as React from 'react';

import Component from './query-section.component';

const Details = ({ values }) => <span>{values.name}</span>;
const Error = () => <span>error</span>;

describe('QuerySection component', () => {
  const props = {
    title: 'Title',
    subtitle: 'Subtitle',
    Component: Details,
  };

  it('should render a loading message if loading prop value is truthy', () => {
    const { getByText } = render(<Component {...props} loading={true} />);

    expect(getByText(/loadingGenericMessage/)).toBeDefined();
  });

  it('should render an error message if error prop value if truthy', async () => {
    const { getByText } = render(<Component {...props} error={true} />);

    expect(getByText(/errorGenericMessage/)).toBeDefined();
  });

  it('should render the wrapped component if values prop value is truthy', async () => {
    const values = {
      name: 'John Smith',
    };
    const component = shallow(<Component {...props} values={values} />);
    expect(component.find(Details).props()).toMatchObject({
      values,
    });
  });

  it('should render an error component if values prop value is null and error component is defined', async () => {
    const component = shallow(<Component {...props} values={null} ErrorComponent={Error} />);
    expect(component.find(Error).length).toEqual(1);
  });
});
