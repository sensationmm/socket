import { isIE } from './is-ie';

describe('isIE', () => {
  let agentGetter;

  beforeAll(() => {
    agentGetter = jest.spyOn(window, 'navigator', 'get');
  });

  it('should be defined as IE if navigator.userAgent includes msie', () => {
    agentGetter.mockReturnValue({
      userAgent: 'msie',
    });
    expect(isIE()).toBeTruthy();
  });

  it('should be defined as IE if navigator.userAgent includes trident', () => {
    agentGetter.mockReturnValue({
      userAgent: 'trident',
    });
    expect(isIE()).toBeTruthy();
  });

  it('should not be defined as IE if navigator.userAgent does not include msie or trident', () => {
    agentGetter.mockReturnValue({
      userAgent: 'notIE',
    });
    expect(isIE()).toBeFalsy();
  });
});
