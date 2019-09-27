const colors = {
  basic: {
    white: '#ffffff',
    black: '#000000',
  },
  brand: {
    main: '#47d7ac',
    secondary: '#007672',
    tertiary: '#f6eb61',
  },
  grey: {
    light: '#f0f0f0',
    mid: '#aeaeae',
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
  book: 300,
  medium: 400,
  semibold: 600,
  bold: 700,
};

const fontSizes = {
  '5xl': '72px',
  '4xl': '42px',
  '3xl': '38px',
  xxl: '28px',
  xl: '24px',
  l: '22px',
  m: '18px',
  s: '16px',
  xs: '14px',
  '3xs': '12px',
  '4xs': '10px',
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
