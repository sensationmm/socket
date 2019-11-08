import { navigate } from 'gatsby-link';
import React, { useEffect, useState } from 'react';

import Select, { FormSelectType } from '@somo/pda-components-form-select/src';
import { IPropsFromDispatch } from './user-switch.container';

export interface IUserSwitchProps extends IPropsFromDispatch {}

const testUsers = [
  { val: '1', label: 'User 1' },
  { val: '2', label: 'User 2' },
  { val: '3', label: 'User 3' },
  { val: '4', label: 'User 4' },
  { val: '5', label: 'User 5' },
  { val: '6', label: 'User 6' },
  { val: '7', label: 'User 7' },
  { val: '8', label: 'User 8' },
  { val: '9', label: 'User 9' },
  { val: '10', label: 'User 10' },
  { val: '11', label: 'User 11' },
  { val: '12', label: 'User 12' },
  { val: '13', label: 'User 13' },
];

const UserSwitch: React.FC<IUserSwitchProps> = ({ selectUser }) => {
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (!userId) {
      return;
    }
    selectUser(userId);
    navigate('/account');
  });

  return (
    <Select label="Select user" type={FormSelectType.Inline} options={testUsers} onChange={(val) => setUserId(val)} />
  );
};

export default UserSwitch;
