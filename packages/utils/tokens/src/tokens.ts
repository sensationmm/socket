const colors = {
  basic: {
    white: '#ffffff',
    black: '#000000',
  },
  brand: {
    main: '#47d7ac',
    secondary: '#007672',
    tertiary: '#f6eb61',
    quaternary: '#004340',
  },
  grey: {
    light: '#f0f0f0',
    mid: '#eaeaea',
    dark: '#2d2d2d',
  },
  text: {
    header: '#007672',
    body: {
      primary: '#2d2d2d',
      secondary: '#ffffff',
    },
  },
  ui: {
    error: '#e02020',
  },
};

const fontWeights = {
  light: 300,
  semibold: 600,
  bold: 700,
};

const fontSizes = {
  '5xl': '60px',
  '4xl': '48px',
  '3xl': '34px',
  xxl: '30px',
  xl: '24px',
  l: '22px',
  m: '20px',
  s: '18px',
  xs: '17px',
  xxs: '16px',
  '3xs': '14px',
  '4xs': '12px',
};

const spacing = {
  none: '0',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '20px',
  xl: '32px',
  xxl: '64px',
};

const breakpoints = {
  xxs: { min: 0, max: 599 },
  xs: { min: 600, max: 767 },
  s: { min: 768, max: 1023 },
  m: { min: 1024, max: 1439 },
  l: { min: 1440, max: 1919 },
  xl: { min: 1920, max: Infinity },
};

const mediaQueries = {
  xxs: `(max-width: ${breakpoints.xxs.max}px)`,
  xs: `(min-width: ${breakpoints.xs.min}px)`,
  s: `(min-width: ${breakpoints.s.min}px)`,
  m: `(min-width: ${breakpoints.m.min}px)`,
  l: `(min-width: ${breakpoints.l.min}px)`,
  xl: `(min-width: ${breakpoints.xl.min}px)`,
};

export default {
  customProperties: {
    breakpoint: breakpoints,
    color: colors,
    spacing,
    font: {
      size: fontSizes,
      weight: fontWeights,
    },
  },
  customMedia: mediaQueries,
  environmentVariables: {},
  customSelectors: {},
};
