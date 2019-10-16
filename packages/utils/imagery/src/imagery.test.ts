import { getImagePath } from '.';

describe('imagery', () => {
  let imagery;
  let imageName;

  beforeAll(() => {
    imagery = [
      {
        node: { name: 'energy-pie', publicURL: '/static/energy-pie-0d0ecc3fa9919bd77c050efd743dde01.png' },
      },
    ];
    imageName = 'energy-pie';
  });

  it('should return correct publicURL', () => {
    expect(getImagePath(imagery, imageName)).toBe(imagery[0].node.publicURL);
  });
});
