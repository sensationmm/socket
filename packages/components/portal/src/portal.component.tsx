import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
  rootElem: Element | string;
}

class Portal extends React.Component<IPortalProps, {}> {
  public static rootElemSelector: string = '#portal-root';
  public static defaultProps = {
    rootElem: Portal.rootElemSelector,
  };
  public container: Element;
  public elem: Element;

  constructor(props) {
    super(props);
    const { rootElem } = props;
    this.container = typeof rootElem === 'string' ? document.querySelector(rootElem) : rootElem;
    this.elem = document.createElement('div');
  }

  public componentDidMount() {
    if (this.container) {
      this.container.appendChild(this.elem);
    }
  }

  public componentWillUnmount() {
    if (this.container) {
      this.container.removeChild(this.elem);
    }
  }

  public render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.elem);
  }
}

export default Portal;
