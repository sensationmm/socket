export const isIE = () => {
  if (typeof navigator !== 'undefined') {
    const nav = navigator as any;

    return nav.userAgent.search(/msie|trident/i) >= 0;
  }

  return false;
};
