import shortid from 'shortid';

import { Action, CLEAR_ALL_NOTIFICATIONS, CREATE_NOTIFICATION, INotification, REMOVE_NOTIFICATION } from './types';

export const initialState: INotification[] = [];

export const notification = (state = initialState, action: Action): INotification[] => {
  switch (action.type) {
    case CREATE_NOTIFICATION:
      return [
        ...state,
        {
          ...action.payload,
          id: shortid.generate(),
        },
      ];
    case REMOVE_NOTIFICATION:
      return state.filter((n) => n.id !== action.payload.id);
    case CLEAR_ALL_NOTIFICATIONS:
      return [];
    default:
      return state;
  }
};
