import cx from 'classnames';
import * as React from 'react';

import SVG from '@somo/pda-components-svg/src';
import * as styles from './multi-select.module.css';

interface IMultiSelectProps {
  options: IMultiSelectOption[];
  onChange(selectedOptions: IMultiSelectOption[]): void;
}

export interface IMultiSelectOption {
  text: string;
  icon: string;
  value: string;
  selected: boolean;
}

const MultiSelect: React.FC<IMultiSelectProps> = ({ options, onChange }) => {
  const [allOptions, setOptions] = React.useState<IMultiSelectOption[]>(options);

  const onItemSelected = (option: IMultiSelectOption) => {
    const updatedOptions = allOptions.map((opt) =>
      opt.value === option.value ? { ...opt, selected: !opt.selected } : opt,
    );
    setOptions(updatedOptions);
    onChange(updatedOptions.filter((opt) => opt.selected === true));
  };

  return (
    <div className={styles.container}>
      {allOptions.map((option, index) => (
        <div
          key={`option-${index}`}
          onClick={() => onItemSelected(option)}
          className={cx(styles.option, { [styles.selected]: option.selected })}
        >
          <div className={styles.icon}>
            <SVG children={option.icon} />
          </div>
          <div className={styles.text}>
            <span>{option.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
