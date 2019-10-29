import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import { ChevronDown } from '@somo/pda-components-icons/src';
import SVG from '@somo/pda-components-svg/src';
import * as KEYS from '@somo/pda-utils-keyboard/src';

import * as styles from './select.module.css';

export enum FormSelectType {
  Default,
  Inline,
}

export interface ISelectItem {
  val: string;
  label: string;
}

export interface IFormSelectProps {
  label?: string;
  value?: string;
  type: FormSelectType;
  onChange: (val) => void;
  options: ISelectItem[];
  defaultOptionText?: string;
  error?: string;
}

export interface IFormSelectState {
  open: boolean;
}

class Select extends React.Component<IFormSelectProps, IFormSelectState> {
  public list;
  public listContainer;
  public dropdownArrow;
  public listItems;
  public dropdownSelectedNode;
  public listItemIds: string[] = [];

  public constructor(props: IFormSelectProps) {
    super(props);

    this.state = {
      open: false,
    };
  }

  /* istanbul ignore next */
  public componentDidMount() {
    const node = ReactDOM.findDOMNode(this) as HTMLElement;
    this.list = node && node.querySelector('#dropdown-list');
    this.listContainer = node && node.querySelector('#dropdown-list-container');
    this.dropdownArrow = node && node.querySelector('#dropdown-arrow');
    this.listItems = node && node.querySelectorAll('.ddl-item');
    this.dropdownSelectedNode = node && node.querySelector('#dropdown-selected');

    this.dropdownSelectedNode.addEventListener('click', (e) => this.toggleListVisibility(e));
    this.dropdownSelectedNode.addEventListener('keydown', (e) => this.toggleListVisibility(e));

    // Add each list item's id to the listItems array
    this.listItems.forEach((item) => this.listItemIds.push(item.id));

    this.listItems.forEach((item) => {
      item.addEventListener('click', (e) => this.liOnClick(e));

      item.addEventListener('keydown', (e) => this.liOnKeyDown(e));
    });
  }

  /* istanbul ignore next */
  public componentWillUnmount() {
    this.dropdownSelectedNode.removeEventListener('click', this.toggleListVisibility);
    this.dropdownSelectedNode.removeEventListener('keydown', this.toggleListVisibility);

    this.listItems.forEach((item) => {
      item.removeEventListener('click', this.liOnClick);
      item.removeEventListener('keydown', this.liOnKeyDown);
    });
  }

  public liOnClick(e) {
    this.setSelectedListItem(e);
    this.closeList();
  }

  public liOnKeyDown(e) {
    switch (e.keyCode) {
      case KEYS.KEY_ENTER:
        this.setSelectedListItem(e);
        this.closeList();
        break;

      case KEYS.KEY_ARROW_DOWN:
        this.focusNextListItem(KEYS.KEY_ARROW_DOWN);
        break;

      case KEYS.KEY_ARROW_UP:
        this.focusNextListItem(KEYS.KEY_ARROW_UP);
        break;

      case KEYS.KEY_ESCAPE:
      default:
        this.closeList();
        break;
    }
  }

  public setSelectedListItem(e) {
    const selectedTextToAppend = document.createTextNode(e.target.innerText);
    this.dropdownSelectedNode.innerHTML = null;
    this.dropdownSelectedNode.appendChild(selectedTextToAppend);
    this.props.onChange(e.target.dataset.val);
  }

  public closeList() {
    this.setState({ open: false });
    this.listContainer.setAttribute('aria-expanded', false);
  }

  public toggleListVisibility(e) {
    const openDropDown = KEYS.KEY_SPACEBAR.includes(e.keyCode) || e.keyCode === KEYS.KEY_ENTER;

    if (e.keyCode === KEYS.KEY_ESCAPE) {
      this.closeList();
    }

    if (e.type === 'click' || openDropDown) {
      this.setState({ open: !this.state.open });
      this.listContainer.setAttribute('aria-expanded', this.state.open);
    }

    if (e.keyCode === KEYS.KEY_ARROW_DOWN) {
      this.focusNextListItem(KEYS.KEY_ARROW_DOWN);
    }

    if (e.keyCode === KEYS.KEY_ARROW_UP) {
      this.focusNextListItem(KEYS.KEY_ARROW_UP);
    }
  }

  /* istanbul ignore next */
  public focusNextListItem(direction) {
    const node = ReactDOM.findDOMNode(this) as HTMLElement;
    const activeElementId = document.activeElement && (document.activeElement.id as string);

    if (activeElementId === 'dropdown-selected') {
      const temp = node.querySelector(`#${this.listItemIds[0]}`) as HTMLElement;
      temp.focus();
    } else {
      const currentActiveElementIndex = activeElementId && this.listItemIds.indexOf(activeElementId);

      if (currentActiveElementIndex !== null) {
        if (direction === KEYS.KEY_ARROW_DOWN) {
          const currentActiveElementIsNotLastItem = currentActiveElementIndex < this.listItemIds.length - 1;

          if (currentActiveElementIsNotLastItem) {
            const nextListItemId = this.listItemIds[(currentActiveElementIndex as number) + 1];
            const temp = node.querySelector(`#${nextListItemId}`) as HTMLElement;
            temp.focus();
          }
        } else if (direction === KEYS.KEY_ARROW_UP) {
          const currentActiveElementIsNotFirstItem = currentActiveElementIndex > 0;

          if (currentActiveElementIsNotFirstItem) {
            const nextListItemId = this.listItemIds[(currentActiveElementIndex as number) - 1];
            const temp = node.querySelector(`#${nextListItemId}`) as HTMLElement;
            temp.focus();
          }
        }
      }
    }
  }

  public render() {
    const { label, type, options, defaultOptionText, value } = this.props;

    return (
      <div className={classNames(styles.select, { [styles.inline]: type === FormSelectType.Inline })}>
        {label && (
          <div id="dropdown-label" className={styles.label}>
            {label}
          </div>
        )}

        <div className={styles.selectbox}>
          <div
            role="button"
            aria-labelledby="dropdown-label"
            id="dropdown-selected"
            tabIndex={0}
            className={classNames(styles.dropdownSelected, { [styles.open]: this.state.open })}
          >
            {value ? value : defaultOptionText}
          </div>

          <span id="dropdown-arrow" className={classNames(styles.selectIcon, { [styles.expanded]: this.state.open })}>
            <SVG children={ChevronDown} />
          </span>

          <div id="dropdown-list-container" className={styles.dropdownListContainer}>
            <ul
              id="dropdown-list"
              aria-expanded="false"
              role="list"
              className={classNames(styles.dropdownList, { [styles.open]: this.state.open })}
            >
              {options &&
                options.map((option, count) => {
                  return (
                    <li
                      key={`select-option-${count}`}
                      className={classNames('ddl-item', styles.dropdownListItem)}
                      tabIndex={0}
                      id={`option-${count}`}
                      data-val={option.val}
                    >
                      {option.label}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Select;
