declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  const svg: string;
  export = svg;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'dialog-polyfill' {
  const registerDialog: (element: Element | undefined) => void;
}
